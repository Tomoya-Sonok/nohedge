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
      <dl>
        <div className='py-4 border-t sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
          <dt className='text-sm font-bold mb-2'>Account</dt>
          <dd className='text-lg space-y-3 sm:text-sm sm:space-y-1 sm:col-span-2 text-primary-text mt-1'>
            <p>
              <a
                href='https://twitter.com/techguy10308'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href='https://github.com/Tomoya-Sonok'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </p>
            <p>
              <a
                href='https://www.wantedly.com/id/tomoya_sonokui'
                target='_blank'
                rel='noopener noreferrer'
              >
                Wantedly
              </a>
            </p>
          </dd>
        </div>
        <div className='py-4 border-t sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
          <dt className='text-sm font-bold'>Job</dt>
          <dd className='text-lg space-y-3 sm:text-sm sm:space-y-1 sm:col-span-2'>
            フロントエンドエンジニア
          </dd>
        </div>
        <div className='py-4 border-t sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
          <dt className='text-sm font-bold'>About</dt>
          <dd className='text-lg space-y-3 sm:text-sm sm:space-y-1 sm:col-span-2'>
            IT未経験からSES企業に入社し、英語の通訳・翻訳業務やバックエンド領域の開発に従事。それから2年後、株式会社ニジボックスにフロントエンドエンジニアとして入社。「知識・知的好奇心に垣根をつくらない」をテーマに当ブログを開設。バックエンドはRuby
            や Node.js、フロントエンドは TypeScript や Next.js が好き。
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default Profile
