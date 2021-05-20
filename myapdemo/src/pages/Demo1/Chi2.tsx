import React from 'react';
import { inject, observer } from 'mobx-react';
function Children2(props: any) {
  return (
    <div>
      <h2>我只组件2</h2>
      <h1>{props.demostore.num}</h1>
    </div>
  )
}

export default inject("demostore")(observer(Children2));
