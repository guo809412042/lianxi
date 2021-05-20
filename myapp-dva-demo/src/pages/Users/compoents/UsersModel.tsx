import React from 'react'
import {connect} from 'umi'

function UsersModel(props:any) {
  console.log("uobj",props.uobj)
  return (
    <div>
      {props.uobj.map(({name}:any,index:number)=> <h1 key={index}>{name}</h1> )}
    </div>
  )
}
export default connect(({userdemo}:any)=>{
  return userdemo
})(UsersModel)
