import React from 'react'
import ProfileImage from './profile-image'

const Profile = () => {
  return (
    <div className='mx-auto max-w-3xl'>
      <div className='flex items-center py-4'>
        <ProfileImage src={'/assets/profile/me.jpg'} alt={'プロフィール画像'} />
        <p className='text-lg font-bold ml-8'>
          Tomoya Sonok
          <br className='md:hidden' />
          <span className='text-sm'>（ @techguy10308 ）</span>
        </p>
      </div>
      <hr />
      <div className='md:flex py-4'>
        <p className='font-bold'>Account</p>
        <ul className='text-primary-text'>
          <li>
            <a
              href='https://twitter.com/techguy10308'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Tomoya-Sonok'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://www.wantedly.com/id/tomoya_sonokui'
              target='_blank'
              rel='noopener noreferrer'
            >
              Wantedly
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className='md:flex py-4'>
        <p className='font-bold'>Job</p>
        <p>Front Engineer</p>
      </div>
      <hr />
      <div className='md:flex py-4'>
        <p className='font-bold'>About</p>
        <p>
          プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。プロフィール文章が入ります。
        </p>
      </div>
    </div>
  )
}

export default Profile
