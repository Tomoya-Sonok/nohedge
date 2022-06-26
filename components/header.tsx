import Link from 'next/link'

const Header = () => {
  return (
    <h2 className='text-2xl md:text-4xl font-bold text-primary-text tracking-tight md:tracking-tighter leading-tight mb-20'>
      <Link href='/'>
        <a className='hover:underline'>No Hedge</a>
      </Link>
    </h2>
  )
}

export default Header
