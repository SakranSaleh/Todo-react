import React, { PropsWithChildren } from 'react'

interface LiProps{
    className?: string;
}

const Li = ({children="", className} : PropsWithChildren<LiProps>) => {
  return (
    <li  className={className}>{children}</li>
  )
}

export default Li