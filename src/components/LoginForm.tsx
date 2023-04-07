import { Button, Form, Input } from 'antd'
import ForwardFloatButton from 'antd/es/float-button/FloatButton'
import React, { FC } from 'react'
import { rules } from '../utils/rules'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useDispatch } from 'react-redux'
import { IUser } from '../models/IUser'
import { useTypedSelector } from '../hooks/TypedUseSelectorHook'
import { useActions } from '../hooks/useActions'

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.authReducer)
    const { login } = useActions()

    const submit = (values: IUser) => {
        console.log('Success:', values)
        login(values.username, values.password)
    }
    return (
        <Form onFinish={submit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form.Item
                label='Имя пользователя'
                name='username'
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}
            >
                <Input />
            </Form.Item>
            <Form.Item label='Пароль' name='password' rules={[rules.required('Пожалуйста введите пароль!')]}>
                <Input type='password' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
