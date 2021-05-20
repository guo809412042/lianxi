import React from 'react'
function Index(WrapperComponent:any) {
  // 类的高阶组件
  // return class extends React.Component{
  //   constructor(props:any){
  //     super(props)
  //     this.state={
  //     }
  //   }
  //   render(){
  //     return (
  //       <WrapperComponent {...this.props} a={"10"}></WrapperComponent>
  //     )
  //   }
  // }
  // 函数式的高阶组件
  return (props:any) => {
    return (
      <WrapperComponent {...props} a={"高阶组件"}></WrapperComponent>
    )
  }

}
export default Index
