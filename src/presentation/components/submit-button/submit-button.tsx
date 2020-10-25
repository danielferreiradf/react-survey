import React, { FC, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
}

const SubmitButton: FC<Props> = (props: Props) => {
  const { text } = props
  const { state } = useContext(Context)

  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">{text}</button>
  )
}

export default SubmitButton
