import { PropsWithChildren } from 'react'
import Li from './LI';
interface UlProps{
    className?: string;
}

const Ul = ({children="", className} : PropsWithChildren<UlProps>) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

Ul.Li = Li;

export default Ul