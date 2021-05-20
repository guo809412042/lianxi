import React, { Component } from 'react'
import {inject,observer } from 'mobx-react'
import { toJS } from 'mobx';
@inject("HomeStore") 
@observer
export default class Index extends Component<any> {
  state={
    useObj:this.props.HomeStore.useObj
  }
  render() {
    console.log('this.props.HomeStore.useObj', this.props.HomeStore.useObj, toJS(this.props.HomeStore.useObj));
    return (
      <div>
        {
          this.props.HomeStore.useObj.map((item:any,index:number)=> <h1 key={index}>{item.name}</h1> )
        }
      </div>
    )
  }
}

