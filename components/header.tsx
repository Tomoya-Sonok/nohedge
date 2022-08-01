import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  let slideClassName = 'slideOut'

  useEffect(() => {
    if (openMenu) {
      slideClassName = 'slideIn'
    } else {
      slideClassName = 'slideOut'
    }
  }, [openMenu])

  const menuFunction = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='h-16 text-primary-text flex justify-between mx-auto max-w-7xl mb-6'>
      <h2 className='text-2xl md:text-4xl font-bold text-primary-text tracking-tight md:tracking-tighter leading-tight flex items-center px-8 md:px-0'>
        <Link href='/'>No Hedge</Link>
      </h2>
      <ul className='hidden md:flex items-center'>
        <li className='mx-4'>
          <Link href='/'>
            <a>Posts</a>
          </Link>
        </li>
        <li className='mx-4'>
          <a>Projects</a>
        </li>
        <li className='mx-4'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <button
        onClick={menuFunction}
        className='absolute top-5 right-5 md:hidden '
        aria-label='menu-button'
      >
        <MenuIcon className='h-7 w-7' />
      </button>
      {openMenu ? (
        <div className='flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full md:hidden'>
          <div className='basis-1/2'></div>
          <div className='basis-1/2 py-14 bg-navmenu'>
            <button
              onClick={menuFunction}
              className='absolute top-5 right-5 md:hidden'
              aria-label='menu-button'
            >
              <XIcon className='h-7 w-7' />
            </button>
            <ul className='py-3 text-primary-text text-center'>
              <li className='text-2xl my-2'>
                <Link href='/'>
                  <a onClick={menuFunction}>Posts</a>
                </Link>
              </li>
              <li className='text-2xl my-2'>Projects</li>
              <li className='text-2xl my-2'>
                <Link href='/about'>
                  <a onClick={menuFunction}>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : undefined}
    </div>
  )
}

export default Header
