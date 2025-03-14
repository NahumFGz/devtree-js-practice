import { Link } from 'react-router-dom'

export default function LoginView() {
  return (
    <>
      <nav>
        <Link to='/auth/register'>¿No estás registrado?, Crea tu cuenta aquí</Link>
      </nav>
    </>
  )
}
