import { PropsWithChildren } from "react";

interface ButtonProps{
    type: 'button' | 'submit' | 'reset';
    className : string;
    onClick : ()=> void;

}

const Button = ({children, type, className="", onClick} : PropsWithChildren<ButtonProps>) => {
  return (
    <button type='submit' className={className}  onClick={onClick}>{children}</button>
  )
}

export default Button