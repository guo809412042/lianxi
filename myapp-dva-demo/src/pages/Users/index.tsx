import React from 'react'
import { Table } from 'antd'
import { connect } from 'umi'
import UsersModel from './compoents/UsersModel'
import Uu from './compoents/Uu'
const Index: React.FC = ({ userdemo, dispatch }: any) => {
  // console.log(users)
  // console.log(dispatch)
  // console.log(userdemo.uses)
  return (
    <>

      {
        (userdemo.demoList.map((item: any, index: number) => <h1 key={index}>{item.typeName}</h1>))}
      <button onClick={() => {
        dispatch({
          type: "userdemo/queryDemoList"
        })
      }}>请求数据</button>
      <Uu></Uu>
      <Table className="main">
      </Table><UsersModel uobj={userdemo.uses}></UsersModel>
    </>
  )
}

// export default connect(({users}:any)=>{
//   return users
// })(Index)


export default connect(state => {
  return state
})(Index)
