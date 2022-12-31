import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className='container mx-auto px-8 max-w-7xl'>{children}</div>
}

export default Container
