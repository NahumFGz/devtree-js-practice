type ErrorMessageProps = {
  children: React.ReactNode
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <>
      <p className='p-3 bg-red-50 text-red-600 uppercase text-sm text-center font-bold'>
        {children}
      </p>
    </>
  )
}

/*
!Forma inline
export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
    </>
  )
}

*/
