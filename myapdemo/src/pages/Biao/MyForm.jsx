import React,{useEffect} from 'react'
import { Form, Space,Input,Button } from 'antd'
function MyForm() {
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log(values)
  }
  useEffect(()=>{
    console.log(form.getFieldsValue());
  },[form])

  return (
    <Form layout="inline" onFinish={onFinish} form={form}>
      <Form.Item name="品牌">
      < Input />
      </Form.Item>
      <Form.Item name="品牌2">
      < Input />
      </Form.Item>
      <Form.Item name="品牌3">
      < Input />
      </Form.Item>
      <Form.Item name="品牌4">
      < Input />
      </Form.Item>
      <Form.Item name="品牌5">
      < Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">asda</Button>
      </Form.Item>
    </Form>
  )
}

export default MyForm
