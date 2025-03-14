import { Link } from 'react-router-dom'

export default function LoginView() {
  return (
    <>
      <div className='text-6xl'>Login View</div>

      <nav>
        <Link to='/auth/register'>¿No estás registrado?, Crea tu cuenta aquí</Link>
      </nav>
    </>
  )
}
