export default function Wrapper({children}: {children:React.ReactNode}) {
  return (
    <div className='flex justify-center'>{children}
    </div>
  )
}