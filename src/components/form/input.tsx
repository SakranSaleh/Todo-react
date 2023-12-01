import React, { ChangeEvent, PropsWithChildren } from 'react'

interface InputProps{
    className ?: string;
    value ?: string;
    placeholder ?: string;
    onChange ?: (e : ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({value="", className="", onChange , placeholder="" } : PropsWithChildren<InputProps>) => {
  return (
    <input className={className} value={value} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input