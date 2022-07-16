<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        label="手机名"
         required
        placeholder="请输入11为手机号"
        :rules="[{ required: true, message: '手机号不为空'}, {pattern:/^1[3-9]\d{9}$/,message: '请输入正确的手机号'}]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="code"
        label="密码"
         required
         autocomplete="off"
        placeholder="请输入6位密码"
        :rules="[{ required: true, message: '请填写密码' , pattern:/^\d{6}$/}]"
      />
      <div style="margin: 16px">
        <van-button round block type="info"
         :disabled="isLoading"
         :loading="isLoading" loading-text="登录中ing..." native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { setToken } from '@/utils/token'
import { Notify } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13888888888',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      console.log(this.user)
      this.isLoading = true
      try {
        const res = await loginAPI(this.user)

        console.log(res)
        Notify({ type: 'success', message: '登录成功' })
        setToken(res.data.data.token)
      } catch (err) {
        Notify({ type: 'danger', message: '手机号或密码错误' })
      }
      this.isLoading = false
    }

  }

}
</script>

<style scoped >

</style>
