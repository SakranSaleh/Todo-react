import React, { ChangeEvent, PropsWithChildren } from 'react'
interface InputProps{
    type?: string;
    id?: string;
    name?: string;
    value: string;
    className?: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
}

const Input = ({ type="text", className="", placeholder="Add text", ...restProps} : PropsWithChildren<InputProps>) => {
  return (
    <input {...restProps} type={type} className={className}  placeholder={placeholder} />
  )
}

export default Input;