import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-16 flex mx-auto max-w-7xl text-2xl md:text-4xl font-bold text-primary-text tracking-tight md:tracking-tighter leading-tight mb-20'>
      <h2 className='flex items-center'>
        <Link href='/'>
          <a className='hover:underline'>No Hedge</a>
        </Link>
      </h2>
    </div>
  )
}

export default Header
