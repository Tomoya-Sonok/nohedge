// import { convertToReact } from '../lib'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className='mx-auto sm:px-6 lg:px-8 max-w-3xl'>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody

// import { convertToReact } from '@/lib'
// import style from '@/styles/markdown-styles.module.scss'

// type Props = {
//   initialContent: string
// }

// const PostBody: React.VFC<Props> = ({ content }) => {
//   return (
//     <div className="space-y-4">
//       <div className={style['markdown']}>{convertToReact(content)}</div>

//       <p className="text-gray-300">Happy Coding 🎉</p>
//     </div>
//   )
// }

// export default PostBody
