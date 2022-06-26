import Header from './header'
import Meta from './meta'
import Footer from './footer'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className='bg-primary'>
        <Header />
        <Meta />
        <div className='min-h-screen'>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
