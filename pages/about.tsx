import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PostType from '../types/post'
import Profile from '../components/profile'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
  src: string
  alt: string
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <section className='mx-auto max-w-7xl flex-col md:flex-row flex items-center md:justify-between mt-6 mb-6 md:mb-12'>
        <h1 className='text-2xl md:text-3xl font-bold text-white tracking-tighter leading-tight px-8'>
          プロフィール
        </h1>
      </section>
      <Container>
        <>
          <div className='mb-32 text-white'>
            <Head>
              <title>Profile | No Hedge</title>
            </Head>
            <Profile />
          </div>
        </>
      </Container>
    </Layout>
  )
}

export default Post
