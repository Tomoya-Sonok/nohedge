import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-16 text-primary-text flex justify-between mx-auto max-w-7xl mb-6'>
      <h2 className='text-2xl md:text-4xl font-bold text-primary-text tracking-tight md:tracking-tighter leading-tight flex items-center px-8 md:px-0'>
        <Link href='/'>No Hedge</Link>
      </h2>
      <ul className='flex items-center'>
        <li className='pr-2'>
          <Link href='/'>Posts</Link>
        </li>
        <li className='pr-2'>Projects</li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
