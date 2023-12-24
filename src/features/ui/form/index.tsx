import React, { FormEvent, PropsWithChildren } from 'react'
import Input from './input'
import Buttons from '../../buttons'

interface Formprops{
  className?: string;
    onSubmit?: ( e : FormEvent<HTMLFormElement> ) => void
}

const Form = ({children, onSubmit, className=""} : PropsWithChildren<Formprops>) => {
  return (
    <form className={className} onSubmit={onSubmit}>{children}</form>
  )
}

Form.Input = Input;
Form.Button = Buttons;
export default Form;