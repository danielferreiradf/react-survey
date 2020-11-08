import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: FC<Factory> = (factory: Factory) => {
  const { makeLogin, makeSignUp } = factory
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
