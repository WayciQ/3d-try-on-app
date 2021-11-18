import React, {useState,useEffect} from 'react';
import {Row, Col, Form, Upload, Input, Button, message} from 'antd';
import axios from 'axios';
import { displayModelToScence } from '../_common/displayModel';
import {ModelService} from '../_services/Model.service'
import {MODEL} from '../_common/constains.common'

const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
};

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
export const ModelForm = ({dataModel}) => {
    
    const [form] = Form.useForm();
    const [mode, setMode] = useState('new');
    const [modelName, setModelName] = useState('');
    const [modelCategory, setModelCategory] = useState('');
    const [modelDescription, setModelDescription] = useState('');
    const [fileObj, setFileObj] = useState(false);
    const [fileMtl, setFileMtl] = useState(false);
    const [fileMaterial, setFileMaterial] = useState(null);
    // display by props
    useEffect(() => {
        handleDisplayValue();
    })
    const handleDisplayValue = () => {
        if(!!dataModel){
            setMode('update')
            form.setFieldsValue({
                Model: {
                    ModelName: dataModel.ModelName,
                    ModelCategory: dataModel.ModelCategory,
                    ModelDescription: dataModel.ModelDescription,
                    ModelObj:dataModel.ModelObj,
                    ModelMtl: dataModel.ModelMtl,
                    ModelMaterial:dataModel.ModelMaterial
                }
            });
        }
    }

    // upload file
    const normFile = (e) => {
        // console.log(e)
        if (Array.isArray(e)) {
            return e;
        };
        return e && e.fileList;
    }


    const handleUpload = async ({file} ) => {
        // Create an object of formData 
        const formData = new FormData();
        // Update the formData object 
        formData.append( 
          "myFile", 
          fileObj,
        );
       
        // Details of the uploaded file 
        console.log(fileObj); 
       
        // Request made to the backend api 
        // Send formData object 
        await axios.post("http://localhost:5000/ModelManagerPage/upload", formData).then(res => {
            console.log(res)
        })
    };

    const handleRemoveFile = () => {
        //console.log(isHaveValue(MODEL.OBJ))
    }

    const handleDowloadFile = (file) => {
        console.log(file)
    }

    // Button action 
    const handleSave = (value) => {
        console.log("form value:",value);
        
        Promise.all(
          [ModelService.createModel(value.Model)]
        ).then(result => {
            console.log(result)
        })

    }
    const handleCancel = () => {
        form.setFieldsValue({
            Model: {
                ModelName: '',
                ModelCategory: '',
                ModelDescription: '',
                ModelObj:[],
                ModelMtl: [],
                ModelMaterial:[]
            }
        });
    }
    const handleDelete = () => {
        
    }
    const onFileChange = value => { 
        console.log(value.file)
        setFileMaterial(value.file)
    }
      // On file upload (click the upload button) 
    
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
                    id='formModel'
                    form={form}
                    onFinish={handleSave}
                    >
                        <Form.Item name={['Model',MODEL.NAME]} label="Model Name" rules={[{ required: true }]}>
                            <Input className="form-input" />
                        </Form.Item>
                        <Form.Item name={['Model',MODEL.CATE]} label="Model Category" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={['Model',MODEL.DES]} label="Model Description" rules={[{ required: true }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={['Model',MODEL.OBJ]}
                            label="File Object"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true }]}
                        >
                            <Upload name={MODEL.OBJ }
                            maxCount={1} 
                            customRequest={handleUpload}
                            onRemove={handleRemoveFile} 
                            onDownload={handleDowloadFile}
                            onChange={onFileChange}
                            showUploadList={{showDownloadIcon: true}}
                            listType="picture">
                                <Button>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name={['Model',MODEL.MTL]}
                            label="File ModelMtl"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true }]}
                        >
                            <Upload name={MODEL.MTL}
                            maxCount={1} 
                            customRequest={handleUpload}
                            onRemove={handleRemoveFile}
                            onDownload={handleDowloadFile}
                            showUploadList={{showDownloadIcon: true}}
                            listType="picture">
                                <Button>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name={['Model', MODEL.MATERIAL]}
                            label="File ModelMaterial"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            
                            rules={[{ required: true }]}
                        >
                            <Upload name={MODEL.MATERIAL}
                            maxCount={1} 
                            customRequest={handleUpload}
                            onRemove={handleRemoveFile}
                            onDownload={handleDowloadFile}
                            onChange={onFileChange}
                            showUploadList={{showDownloadIcon: true}}
                            listType="picture">
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
                <button className='btn primary' form="formModel" >Save</button>
                <button className='btn secondary' onClick={handleDelete}>Delete</button>
                <button className='btn primary' onClick={handleCancel}>Cancel</button>
            </Row>
        </div>
    )
}