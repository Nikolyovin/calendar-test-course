import { Button, DatePicker, Form, Input, Row, Select, SelectProps } from 'antd'
import React, { FC } from 'react'
import { rules } from '../utils/rules'
import { IUser } from '../models/IUser'
import { Moment } from 'moment'
import { formatedate } from '../utils/date'

interface EventFormProps {
    guests: IUser[]
}

interface IEventForm {
    description: string
    date: DateConstructor
    user: string
}

const EventForm: FC<EventFormProps> = props => {
    const options = props.guests.map(item => ({
        value: item.username,
        label: item.username
    }))

    const onFinish = (values: IEventForm) => console.log(values)

    const selectDate = (date: Moment | null) => {
        if (date) {
            console.log(formatedate(date?.toDate()))
        }
    }

    return (
        <Form onFinish={onFinish}>
            <Form.Item label='Описание события' name='description' rules={[rules.required()]}>
                <Input />
            </Form.Item>
            <Form.Item label='Дата события' name='date' rules={[rules.required()]}>
                <DatePicker />
            </Form.Item>
            <Form.Item label='user' name='user' rules={[rules.required()]}>
                <Select options={options} />
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm
