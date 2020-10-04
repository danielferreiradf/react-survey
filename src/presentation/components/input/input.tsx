import React, { FC } from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} type="email" name="email" placeholder="Digite seu e-mail" />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default Input
