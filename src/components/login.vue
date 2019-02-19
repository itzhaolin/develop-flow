<template>
<el-form ref="form" :model="form" label-width="80px"
class="login-form">
  <el-form-item label="账号">
    <el-input v-model="form.account"></el-input>
  </el-form-item>
   <el-form-item label="密码">
    <el-input v-model="form.password"
        type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button>注册</el-button>
  </el-form-item>
</el-form>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if (this.form.account === 'admin' && this.form.password === '123') {
          this.$message.success('登录成功')
        } else {
          this.$message.error('账户或密码错误')
        }
      }
    }
  }
</script>

<style>
    .login-form{
        width: 500px;
        margin:100px auto;
        text-align: center;
    }
</style>

