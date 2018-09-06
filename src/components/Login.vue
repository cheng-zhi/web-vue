<template>
  <div class="login-container">
    <!-- 头像区域 -->
    <div class="avatar">
      <img src="../assets/logo.png" alt="">
    </div>
    <!-- 表单区域 -->
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="loginForm">
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input v-model="loginForm.username">
          <i slot="prefix" class="iconfont icon-user"></i>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password">
          <i slot="prefix" class="iconfont icon-3702mima"></i>
        </el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item class="btns">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mix from './Login-mixins.js'
export default {
  // 把外界导入的行为 用过mixins属性混入到当前组件中生效
  mixins: [mix]
}
</script>

<style lang="less" scoped>
.login-container {
  width: 450px;
  height: 304px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;

  .avatar {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 7px;
    box-shadow: 0 0 10px #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.loginForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
