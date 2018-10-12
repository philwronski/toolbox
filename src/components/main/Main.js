import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Tools } from 'src/components/tools'
import { Home } from 'src/components/home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tools' component={Tools} />
    </Switch>
  </main>
)

export default Main