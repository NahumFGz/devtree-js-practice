import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserByHandle } from '../api/DevTreeAPI'

export default function HandleView() {
  const params = useParams()
  const handle = params.handle!
  const { data, error, isLoading } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle],
    retry: 1
  })

  console.log('data: ', data)

  if (isLoading) return 'Cargando...'
  if (error) return <Navigate to={'/404'} />

  return (
    <>
      <p>HandleView</p>
    </>
  )
}
