import { Layout, Row, Menu, Col } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router'

//Layout.Header можно экспортировать как Header
//Row - это посути флекс контейнер, только ориентирован строкой
const Navbar: FC = () => {
    const navigate = useNavigate()
    const auth = true
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
        // { label: 'Логин 2', key: 2 },
        // { label: 'Логин 3', key: 3 }
    ]

    const items2 = [
        {
            label: 'Выйти',
            key: 1,
            onClick() {
                console.log('Выйти')
            }
        }
    ]
    return (
        <Layout.Header>
            <Row justify={'end'}>
                {auth ? (
                    <>
                        <Col span={2}>
                            <Menu theme='dark' mode='horizontal' items={items2} /*selectable={false}*/ />
                        </Col>
                        <Col span={2}>
                            <div style={{ color: 'white' }}>Ulbi TV</div>
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
