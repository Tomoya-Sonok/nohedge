import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <div className='grid gap-4 md:gap-10 grid-cols-1 md:grid-cols-2 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default Posts
