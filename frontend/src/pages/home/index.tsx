import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import LoginForm from '../../components/form/login-form'
import RegisterForm from '../../components/form/register-form'
import Page from '../../components/page'
import useAuthContext from '../../hooks/useAuthContext'

const Home = () => {
  const [typeForm, setTypeForm] = useState('login')
  const { auth } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth) navigate('/account', { replace: true })
  }, [auth, navigate])

  const toggleTypeForm = () => {
    setTypeForm(typeForm === 'login' ? 'register' : 'login')
  }
  return (
    <Page>
      <div className="flex h-fit min-h-[50vh] min-w-[25vw] flex-col gap-4 rounded border bg-white p-4">
        {typeForm === 'login' ? <LoginForm /> : <RegisterForm />}
        <span className="self-center">
          {typeForm === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}{' '}
          <Button
            onClick={toggleTypeForm}
            className="border-none bg-transparent p-0 text-green-600 outline-none hover:underline focus:underline">
            {typeForm === 'login' ? 'Sign Up' : 'Sign In'}
          </Button>
          .
        </span>
      </div>
    </Page>
  )
}

export default Home
