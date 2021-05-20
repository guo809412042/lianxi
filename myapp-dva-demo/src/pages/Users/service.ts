import request  from '../../utils/request'


// 127.0.0.1:5050/home/getShowType
export async function getShowList(params:any) {
  return await request('/api/home/getShowType/a',{
    method:"get",
    params
  })
}