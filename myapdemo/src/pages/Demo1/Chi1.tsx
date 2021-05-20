import React from 'react';
import Chi2 from './Chi2';
import { useObserver, Observer, useLocalStore } from 'mobx-react';
import DemoStore from '../Store/Store';

function Children1(props: any) {
  const loacstore = useLocalStore(() => DemoStore);
  console.log(loacstore);
  return useObserver(() => (
    <div>
      <h1 style={{ backgroundColor: "red" }}>子组件2
        <span>{loacstore.num}</span>
      </h1>
      <button onClick={
        () => {
          loacstore.setNum(50);
        }
      }>加一个</button>
      <Chi2></Chi2>
    </div>
  ));
}

export default Children1;
