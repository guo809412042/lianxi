import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import store from '../../Store/HomeStore';
import { toJS } from 'mobx';
import withConponent from './Hoc'
import Children1 from './Children1'
import {connect} from 'umi'


const Index = ({demostore}:any) => {
  const {list} = demostore
  useEffect(() => {
    console.log('store', store.count, toJS(store.addUser));
    store.setCount(1000);
  }, []);

  return useObserver(() => (

     <div>
       <h1>{store.count}</h1>
       <Children1 list={list}></Children1>
     </div>
  ));
};

export default connect(({demostore}:any)=>{
  return {
    demostore
  }
})(withConponent(Index))
