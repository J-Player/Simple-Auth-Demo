import { jwtDecode } from 'jwt-decode'
import Button from '../../components/button'
import Page from '../../components/page'
import useAuthContext from '../../hooks/useAuthContext'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { AuthService } from '../../services/impl/AuthService'

const Account = () => {
  const { auth, setAuth } = useAuthContext()
  const token = jwtDecode(auth!.accessToken)
  const axios = useAxiosPrivate()

  const handleLogout = async () => {
    const authService = new AuthService(axios)
    await authService.logout().then(() => setAuth(null))
  }

  return (
    <Page>
      <div className="mx-auto flex h-fit min-h-[50vh] max-w-[30vw] flex-col gap-4 border bg-white p-4">
        <h1 className="text-2xl">Hi, {token.sub}! Welcome to your account!</h1>
        <p>
          If you are seeing this page, it means you have logged in successfully!
          🎉
        </p>
        <p>
          Your <strong>Access Token</strong> has been saved in{' '}
          <em>localStorage</em> on your <em>browser</em>.
        </p>
        <p>
          Your <strong>Refresh Token</strong> has been saved in a{' '}
          <em>cookie</em> 🍪 on your <em>browser</em>. This cookie has the{' '}
          <strong>HttpOnly</strong> flag, meaning it is inaccessible using API
          Javascript.
        </p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </Page>
  )
}

export default Account
