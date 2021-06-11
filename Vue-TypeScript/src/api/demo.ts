// import request from '@/utils/request' // 引入 axios 请求模块
import { DemoInterFace } from './types' // 引入接口类型

export const demoData: DemoInterFace = {
  id: 0,
  title: '',
  timestamp: '',
  platforms: ['demo'],
  isDisabled: true,
  data: [{ id: 0 }]
}

/**
 * 设置请求
 */
// export const getDemoData = (params: any) =>
//   request({
//     url: '',
//     method: 'get',
//     params
//   })

// export const setDemoData = (data: any) =>
//   request({
//     url: '',
//     method: 'post',
//     data
//   })
