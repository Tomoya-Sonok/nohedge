import Container from '../components/container'
import Posts from '../components/posts'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

// TODO: とにかく見た目に関わる不要なコードはすべて機能を損なわないように消して、クリーンな状態にする -> Figma？？？？
// TODO: それらが終わったら、地道にパンダさんや自分の過去に作成したブログのUIを参考に画面を上から作っていく（コンポーネント化を可能な限り意識）

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>No Hedge</title>
        </Head>
        <Container>
          <Intro />
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
