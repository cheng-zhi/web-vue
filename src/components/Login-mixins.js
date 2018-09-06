export default {
  data() {
    return {
      // 登录表单的数据对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 登录表单的验证规则对象
      loginFormRules: {
        username: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 点击重置按钮 重置表单
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // 进行表单验证
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        this.$message.success('登录成功')
        // 把登录成功的token保存到sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
