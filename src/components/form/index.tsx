import React, { FormEvent, PropsWithChildren } from 'react'
import Input from './input'
import Button from '~/components/Button';

interface FormProps{
    onSubmit ?: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({children, onSubmit} : PropsWithChildren<FormProps>) => {
  return (
    <form onSubmit={onSubmit}>{children}</form>
  )
}

Form.Input = Input;
Form.Button = Button;
export default Form;