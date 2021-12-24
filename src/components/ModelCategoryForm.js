import React from 'react';
import {Row, Col, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { createCategoryAction } from '../redux/action';
const formItemLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  };


export const ModelCategoryForm = () => {

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleSave = (value) => {
        const key = 'addCategory';
        message.loading({ content: 'Loading...', key});
        dispatch(createCategoryAction(value.ModelCategory));
        form.resetFields();
    }

    const handleCancel = () => {
        form.resetFields();
    }
    return(
        <div className="form-container">
            <Row>
                <span className='form-title'>Model Category</span>
            </Row>
            <Row style={{width:"100%"}}>
                <Col span={24}>
                    <Form 
                    {...formItemLayout}
                    labelAlign="left"
                    requiredMark={false}
                    className='form'
                    id='formModelCategory'
                    form={form}
                    onFinish={handleSave}
                    >
                        <Form.Item name={['ModelCategory','ModelCategoryName']} label="Category Name" rules={[{ required: true }]}>
                            <Input className="form-input" />
                        </Form.Item>
                        <Form.Item name={['ModelCategory','ModelCategoryDescription']} label="Category Description" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row justify='end'>
                <button className='btn primary' form="formModelCategory" >Save</button>
                <button className='btn primary' onClick={handleCancel}>Cancel</button>
            </Row>
        </div>
    )
}