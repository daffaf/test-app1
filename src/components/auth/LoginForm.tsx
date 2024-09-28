'use client'

import { Button, Form, Input } from "antd"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()

  const handleLogin = async () => {
    router.push('/')
  }
  const handleError = () => {
    console.log('invalid username or password')
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Form
        name="login"
        style={{ width: 400 }}
        onFinish={handleLogin}
        onFinishFailed={handleError}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Username cannot empty"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              min: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              // message: "Password cannot empty or using characters"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 20, span: 16 }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginForm 