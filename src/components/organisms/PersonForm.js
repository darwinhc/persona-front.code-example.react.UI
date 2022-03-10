import React, {Fragment} from "react";
import {Button, Form, Input, Select} from 'antd';
import {ID_TYPES} from "../../constants";

const {Option} = Select;

const PersonForm = ({onFinish = (values) => {}, initialValues = {}}) => {
    const _onFinish = (values) => {
        onFinish(values)
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <Fragment>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={initialValues}
            onFinish={_onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size={"large"}
        >
            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese el nombre',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Apellido"
                name="apellido"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese el apellido',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="tipo_documento"
                label="Tipo documento"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    {ID_TYPES.map((elm, uid) => (
                        <Option value={uid} key={`option${uid}`}>{elm}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Documento"
                name="documento"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese el documento',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Hobbie"
                name="hobbie"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese el hobbie',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </Fragment>
}

export default PersonForm;