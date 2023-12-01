import React, { PropsWithChildren } from 'react'
import Li from './li';

interface ULProps {
    className?: string;
}
const Ul = ({children, className=""} : PropsWithChildren<ULProps>) => {
  return (
    <ul>{children}</ul>
  )
}


Ul.Li = Li;
export default Ul