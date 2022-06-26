import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div className='rounded-lg text-white bg-cardgray hover:bg-hover-cardgray'>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='block flex h-full flex-col justify-between px-6 py-4'>
            {title} <br /> <DateFormatter dateString={date} />
          </a>
        </Link>
      </h3>
      {/* 以下、テンプレートで生成された箇所 */}
      {/* <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p> */}
    </div>
  )
}

export default PostPreview
