import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'
import {LazyHelloWorld, LazySecondPage} from '../../routes'

export const App: FC = () => (
  <Switch>
    <Route path="/" exact component={LazyHelloWorld} />
    <Route path="/second" component={LazySecondPage} />
  </Switch>
)
