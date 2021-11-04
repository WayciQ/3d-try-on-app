import React from 'react';
import {Row, Col, Form, Input} from 'antd';

const formItemLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  };
export const ModelCategoryForm = () => {

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
                <button className='btn primary'>Save</button>
                <button className='btn primary'>Cancel</button>
            </Row>
        </div>
    )
}