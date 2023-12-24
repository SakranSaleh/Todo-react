import { PropsWithChildren } from "react";

interface ButtonProps{
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: ()=> void;
}

const Buttons = ({children, type='button', className="", onClick} : PropsWithChildren<ButtonProps>) => {
  return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
  )
}

export default Buttons;