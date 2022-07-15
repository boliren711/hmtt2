import requset from '@/utils/requst'

export const loginAPI = ({ mobile, code }) =>
  requset({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
