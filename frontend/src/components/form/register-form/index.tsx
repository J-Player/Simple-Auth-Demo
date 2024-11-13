import { useEffect, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import axios from '../../../api/axios'
import { AuthService } from '../../../services/impl/AuthService'
import Button from '../../button'
import { Icon } from '../../icon'
import Input from '../../input'
import Label from '../../label'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(false)
  const inputPasswordRef = useRef<HTMLInputElement>(null)
  const inputPasswordConfirmationRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPasswordsMatch(password === passwordConfirmation)
  }, [password, passwordConfirmation])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!passwordsMatch) return
    const authService = new AuthService(axios)
    const response = await authService.register(username, password)
    if (response.status !== 201) {
      alert(`[${response.status} ${response.statusText}]: ${response.data}`)
    }
  }

  return (
    <Form
      className="flex flex-col gap-[inherit]"
      onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center text-2xl">Register</h1>
      <div className="flex items-center gap-[inherit]">
        <Label className="flex w-full gap-[inherit]" htmlFor="username">
          <Icon name="user" />
          <Input
            className="w-full outline-green-500"
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
      </div>
      <div className="flex items-center gap-[inherit]">
        <Label className="flex w-full gap-[inherit]" htmlFor="password">
          <Icon name="password" />
          <Input
            ref={inputPasswordRef}
            className="w-full outline-green-500"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
      </div>
      {password.length > 0 && (
        <div className="flex items-center gap-[inherit]">
          <Label
            className="flex w-full gap-[inherit]"
            htmlFor="password-confirmation">
            <Icon name="password" />
            <Input
              ref={inputPasswordConfirmationRef}
              className="w-full outline-green-500"
              type="password"
              id="password-confirmation"
              placeholder="confirm password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              disabled={password.length == 0}
            />
          </Label>
        </div>
      )}

      {!passwordsMatch && password.length > 0 && (
        <span className="text-center text-sm text-red-500">
          Passwords do not match.{' '}
        </span>
      )}
      <Button type="submit" disabled={!username || !passwordsMatch}>
        Register
      </Button>
    </Form>
  )
}

export default RegisterForm
