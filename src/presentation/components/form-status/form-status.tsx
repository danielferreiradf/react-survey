import React, { FC, useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: FC = () => {
  const { state: { isLoading }, errorState: { errorMain } } = useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMain && <span className={Styles.error}>{errorMain}</span>}
    </div>
  )
}

export default FormStatus
