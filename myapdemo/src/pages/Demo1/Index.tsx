import React from 'react';
import { Provider } from 'mobx-react';
import DemoStore from '../Store/Store';
import Chi1 from './Chi1'

function Index() {

  return (
    <Provider demostore={DemoStore}>
      <h1 style={{ backgroundColor: 'yellow' }}>子组件一</h1>
      <Chi1></Chi1>
    </Provider>
  )
}

export default Index
