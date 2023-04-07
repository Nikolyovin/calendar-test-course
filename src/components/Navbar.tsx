import { Layout, Row, Menu, Col } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router'
import { useTypedSelector } from '../hooks/TypedUseSelectorHook'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useActions } from '../hooks/useActions'

//Layout.Header можно экспортировать как Header
//Row - это посути флекс контейнер, только ориентирован строкой
const Navbar: FC = () => {
    const { logout } = useActions()
    const { isAuth, user } = useTypedSelector(state => state.authReducer)
    const navigate = useNavigate()

    const items = [
        {
            label: 'Логин',
            key: 1,
            // onClick() {
            //     ;() => navigate(RouteNames.LOGIN)
            // }
            onClick: () => {
                navigate(RouteNames.LOGIN)
            }
        }
    ]

    const items2 = [
        {
            label: 'Выйти',
            key: 1,
            onClick: () => {
                logout()
            }
        }
    ]
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ? (
                    <>
                        <Col span={2}>
                            <Menu theme='dark' mode='horizontal' items={items2} /*selectable={false}*/ />
                        </Col>
                        <Col span={2}>
                            <div style={{ color: 'white' }}>{user.username}</div>
                        </Col>
                    </>
                ) : (
                    <Col span={4}>
                        <Menu theme='dark' mode='horizontal' items={items} /*selectable={false}*/ />
                    </Col>
                )}
            </Row>
        </Layout.Header>
    )
}

export default Navbar
