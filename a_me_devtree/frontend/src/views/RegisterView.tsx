import { Link } from 'react-router-dom'

export default function RegisterView() {
  return (
    <>
      <div className='text-6xl'>Register View</div>

      <nav>
        <Link to='/auth/login'>¿ Ya estás registrado?, inicia sesion aquí</Link>
      </nav>
    </>
  )
}
