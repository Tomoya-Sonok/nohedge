import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Image from 'next/image'
import Container from '../components/container'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import PostType from '../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <>
          <div className='mb-32 text-white'>
            <Head>
              <title>Profile | No Hedge</title>
            </Head>
            <h1>Hello World!</h1>
            <hr />
            <Image src='/assets/profile/me.jpg' width={300} height={300} />
            <hr />
          </div>
        </>
      </Container>
    </Layout>
  )
}

export default Post
