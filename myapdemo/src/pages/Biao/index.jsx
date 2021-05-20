import React,{useState,useEffect} from 'react'
import { Form, Space,Input,Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import MyForm from './MyForm'

function Index() {
  const [data,setData] = useState([])

  useEffect(()=>{
    console.log(data)
  }, [data.length]);
  return (
    <div>
      <MyForm/>
      <Space direction="vertical">
        <div style={{backgroundColor:'red',height:20,width:300}}>
          <button onClick={() => {
            const d = [...data,<MyForm  key={Math.random() * 10000}/>]
            setData(d)
           
          }}>增加</button>
        </div>
        <button>add</button>
       {data.map(item=>item)}
      </Space>

    </div>
  )
}

export default Index
