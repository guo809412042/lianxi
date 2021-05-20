// import { observer ,inject} from 'mobx-react'


 function Index({list}:any) {
   console.log(list)
  // const {count,useObj,add,addUser} = props.HomeStore
  const handleClick = ()=>{
    // addUser({
    //   name:"aaa",
    //   age:2
    // })
  }
  // console.log(useObj)
  return (
    <div onClick={handleClick}>
      添加一个用户
      <h1> store 厂库传来得{list}</h1>
    </div>
  )
}
// export default inject("HomeStore")(observer(Index))
export default Index
