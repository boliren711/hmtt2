// 基于axios 封装网络请求
import theAxios from 'axios'
const axios = theAxios.create({
  // 接口基地址
  baseURL: 'http://ttapi.research.itcast.cn/'，
  timeout:20000 // 请求20秒无反应直接判定超时
})

export default axios