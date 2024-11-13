import { useState } from 'react'
import { Form } from 'react-router-dom'
import useAuthContext from '../../../hooks/useAuthContext'
import { AuthService } from '../../../services/impl/AuthService'
import Button from '../../button'
import { Icon } from '../../icon'
import Input from '../../input'
import Label from '../../label'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setAuth } = useAuthContext()
  const axios = useAxiosPrivate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const authService = new AuthService(axios)
    return await authService.login(username, password)
      .then(res => setAuth(auth => ({ ...auth, accessToken: res.data.access_token })))
      .catch(err => {
        const { data } = err.response
        alert(`${Object.entries(data).join('\n')}`)
      })
  }

  return (
    <Form
      className="flex flex-col gap-[inherit]"
      onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center text-2xl">Login</h1>
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
            className="w-full outline-green-500"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
      </div>
      <Button type="submit" disabled={!username || !password}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
