import { Link } from 'react-router-dom'

export default function RegisterView() {
  return (
    <>
      <nav>
        <Link to='/auth/login'>¿ Ya estás registrado?, inicia sesion aquí</Link>
      </nav>
    </>
  )
}
