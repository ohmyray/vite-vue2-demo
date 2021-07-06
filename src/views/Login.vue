<template>
  <div class="r-login-container">
    <el-form
      :model="userForm"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="r-login-form"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="userForm.username"
          auto-complete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="userForm.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          @click="handleSubmit"
          :loading="logining"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetch } from '../util/http';

interface IUser {
  username: string;
  password: string;
}

@Component
export default class Login extends Vue {
  private userForm: IUser = {
    username: '',
    password: '',
  };
  private checked: boolean = false;
  private logining: boolean = false;
  private rules2: any = {
    username: [
      { required: true, message: 'please enter your account', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'enter your password', trigger: 'blur' },
    ],
  };
  public handleSubmit() {
    fetch.post('http://localhost:3000/basic-api/login', this.userForm).then((response) => {
      const {result} = response.data;
      if (result) {
        localStorage.setItem('r-token', result.token);
        this.$router.push({ path: '/' });
      }
    });
    console.log('this.$refs.ruleForm2', this.$refs.ruleForm2);
  }
}
</script>
<style lang="scss" scoped>
.r-login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;

}
.r-login-form {
  width: 20vw;
  box-sizing: border-box;
  padding-top: 15%;
}
</style>