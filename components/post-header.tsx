import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='max-w-2xl mx-auto text-right'>
        <div className='mb-6 mt-9 text-lg'>
          <DateFormatter dateString={date} />
          {/* TODO: ここにTwitterアカウントへ繋ぐaタグ用のコンポーネントを置く */}
        </div>
      </div>
    </>
  )
}

export default PostHeader
