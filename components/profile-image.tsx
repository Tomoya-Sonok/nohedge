import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

const ProfileImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={80}
      height={80}
      className='object-contain rounded-full'
    />
  )
}

export default ProfileImage
