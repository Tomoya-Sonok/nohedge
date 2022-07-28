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
        <ul>
          <li>Twitter</li>
          <li>Github</li>
          <li>Wantedly</li>
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
