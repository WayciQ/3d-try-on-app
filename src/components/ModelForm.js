import React, {useState,useEffect} from 'react';
import {Row, Col, Form, Upload, Input, Button} from 'antd';
import { displayModelToScence } from '../_common/displayModel';
const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
export const ModelForm = () => {
    
    const handleSave = () => {
        displayModelToScence("purple1");
    }
    const handleCancel = () => {
        displayModelToScence("Sunglasses2");
    }
    const handleDelete = () => {
        displayModelToScence("untitled");
    }
    return(
        <div className="form-container">
            <Row>
                <span className='form-title'>Model</span>
            </Row>
            <Row>
                <Col span={12}>
                    <Form 
                    {...formItemLayout}
                    labelAlign="left"
                    requiredMark={false}
                    className='form'
                    >
                        <Form.Item name={['Model','ModelName']} label="Model Name" rules={[{ required: true }]}>
                            <Input className="form-input" />
                        </Form.Item>
                        <Form.Item name={['Model','ModelCategory']} label="Model Category" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['Model','ModelDescription']} label="Model Description" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={['Model','ModelObj']}
                            label="File Object"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true }]}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name={['Model','ModelMtl']}
                            label="File Object"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true }]}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name={['Model','ModelMaterial']}
                            label="File Object"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true }]}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        
                    </Form>
                </Col>
                <Col span={10} offset={2}>
                    <div className="demo-item" id="demo"> </div>
                </Col>
            </Row>
            <Row justify='end'>
                <button className='btn primary' onClick={handleSave}>Save</button>
                <button className='btn secondary' onClick={handleDelete}>Delete</button>
                <button className='btn primary' onClick={handleCancel}>Cancel</button>
            </Row>
        </div>
    )
}