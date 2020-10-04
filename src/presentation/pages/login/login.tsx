import React, { FC } from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner'

const Login: FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjU1LjIgMjU1LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NS4yIDI1NS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA5RTgxOyIgZD0iTTEyNy42LDE5NS4ybC01OC40LTMzLjZ2NzkuMmMxNy42LDkuMiwzNy42LDE0LjQsNTguNCwxNC40YzI1LjIsMCw0OC44LTcuMiw2OC40LTIwTDEyNy42LDE5NS4yeiINCgkJLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDBCNTk0OyIgZD0iTTE4NiwxNjEuMmwtNTguNCwzNGw2OC40LDM5LjZjMzUuNi0yMi44LDU4LjgtNjIuNCw1OC44LTEwNy4yYzAtMiwwLTQsMC02TDE4NiwxNjEuMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA5RTgxOyIgZD0iTTE4Niw5NHY2Ny42bDY4LjQtMzkuNmMtMi00Ni44LTI5LjItODYuOC02OC40LTEwNy4yVjk0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMEI1OTQ7IiBkPSJNMTI3LjYsNjBMMTg2LDkzLjZWMTQuNEMxNjguNCw1LjIsMTQ4LjQsMCwxMjcuNiwwYy0yNS4yLDAtNDguOCw3LjItNjguNCwyMEwxMjcuNiw2MHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA5RTgxOyIgZD0iTTY5LjIsOTRsNTguNC0zNEw1OS4yLDIwLjRDMjMuNiw0My4yLDAuNCw4Mi44LDAuNCwxMjcuNmMwLDIsMCw0LDAsNkw2OS4yLDk0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMEI1OTQ7IiBkPSJNNjkuMiwxNjEuMlY5My42TDAuOCwxMzMuMkMyLjgsMTgwLDMwLDIyMCw2OS4yLDI0MC40VjE2MS4yeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt=""/>
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login
