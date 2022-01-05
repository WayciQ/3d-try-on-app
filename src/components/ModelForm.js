import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Upload, Input, Button, message, Select } from "antd";
import { MODEL } from "../_common/constains.common";
import { useDispatch, useSelector } from "react-redux";
import {
  createModelAction,
  deleteModelAction,
  findAllAction,
  cancelModelAction,
} from "../redux/action";
import { cancelDisplayModel } from "../_common/displayModel";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const { Option } = Select;

export const ModelForm = () => {
  const [form] = Form.useForm();
  const [mode, setMode] = useState(false);
  const [fileObj, setFileObj] = useState({});
  const [fileMtl, setFileMtl] = useState({});
  const [fileMaterial, setFileMaterial] = useState({});
  const [fileImg, setFileImg] = useState({});
  const { model, isUpdate } = useSelector((state) => state.ModelReducer);
  const { dataCategory } = useSelector((state) => state.ModelManagerReducer);
  const dispatch = useDispatch();
  // display by props
  useEffect(() => {
    handleDisplayValue();
  }, [model]);
  const demo = useRef(null);
  const handleDisplayValue = () => {
    if (isUpdate && !mode) {
      setMode(true);
    }
    form.setFieldsValue({
      Model: {
        ModelName: model.ModelName,
        ModelCategory: model.ModelCategory,
        ModelDescription: model.ModelDescription,
        ModelObj: model.ModelObj,
        ModelMtl: model.ModelMtl,
        ModelMaterial: model.ModelMaterial,
        ModelImage: model.ModelImage,
      },
    });
  };

  const renderCategory = () => {
    return dataCategory.map((item, index) => {
      return (
        <Option value={item.ModelCategoryName} key={item._id}>
          {item.ModelCategoryName}
        </Option>
      );
    });
  };
  const normFile = (e) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUploadFile = ({ file, onSuccess, filename }) => {
    console.log(filename);
    switch (filename) {
      case MODEL.OBJ:
        setFileObj(file);
        break;
      case MODEL.MTL:
        setFileMtl(file);
        break;
      case MODEL.MATERIAL:
        setFileMaterial(file);
        break;
      case MODEL.IMG:
        setFileImg(file);
        break;
      default:
        break;
    }
    setTimeout(() => {
      onSuccess("ok");
    }, 1000);
  };

  const handleRemoveFile = () => {
    //console.log(isHaveValue(MODEL.OBJ))
  };

  const handleDowloadFile = (file) => {
    console.log(file);
  };
  // Button action

  const handleSave = async (value) => {
    const key = "addModel";
    console.log("form value:", value);
    message.loading({ content: "Loading...", key });
    dispatch(createModelAction(value.Model, fileObj, fileMaterial, fileMtl));
  };

  const handleCancel = () => {
    dispatch(cancelModelAction());
    cancelDisplayModel();
    setMode(false);
  };
  const handleDelete = () => {
    if (!!model._id) {
      dispatch(deleteModelAction(model._id));
      dispatch(findAllAction());
    } else {
      message.error({ content: "please choose the model", duration: 1 });
    }
    setMode(false);
    dispatch(cancelModelAction());
    cancelDisplayModel();
  };
  return (
    <div className="form-container">
      <Row>
        <span className="form-title">Model</span>
      </Row>
      <Row>
        <Col span={12}>
          <Form
            {...formItemLayout}
            labelAlign="left"
            requiredMark={false}
            className="form"
            id="formModel"
            form={form}
            onFinish={handleSave}
          >
            <Form.Item
              name={["Model", MODEL.NAME]}
              label="Model Name"
              value={model.ModelName}
              rules={[{ required: true, message: "please field Name" }]}
            >
              <Input disabled={mode} />
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.CATE]}
              label="Model Category"
              rules={[{ required: true, message: "please select Category" }]}
            >
              <Select
                placeholder=""
                allowClear={true}
                disabled={mode}
                // onChange={handleSelectHeThongRap}
              >
                {renderCategory()}
              </Select>
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.DES]}
              label="Model Description"
              rules={[{ required: true }]}
            >
              <Input disabled={mode} />
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.OBJ]}
              label="File Object"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "please upload file obj" }]}

              // rules={[{ required: true }]}
            >
              <Upload
                name={MODEL.OBJ}
                maxCount={1}
                customRequest={beforeUploadFile}
                onRemove={handleRemoveFile}
                onDownload={handleDowloadFile}
                disabled={mode}
                listType="text"
              >
                <Button>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.MTL]}
              label="File Mtl"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "please upload file mtl" }]}
            >
              <Upload
                name={MODEL.MTL}
                maxCount={1}
                customRequest={beforeUploadFile}
                onRemove={handleRemoveFile}
                onDownload={handleDowloadFile}
                disabled={mode}
                listType="text"
              >
                <Button>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.MATERIAL]}
              label="File Material"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              // rules={[{ required: true }]}
              rules={[{ required: true, message: "please upload file mtl" }]}
            >
              <Upload
                name={MODEL.MATERIAL}
                maxCount={1}
                customRequest={beforeUploadFile}
                onRemove={handleRemoveFile}
                onDownload={handleDowloadFile}
                disabled={mode}
                listType="picture"
              >
                <Button>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name={["Model", MODEL.IMG]}
              label="File Image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "please upload file image" }]}
              // rules={[{ required: true }]}
            >
              <Upload
                name={MODEL.IMG}
                maxCount={1}
                customRequest={beforeUploadFile}
                onRemove={handleRemoveFile}
                onDownload={handleDowloadFile}
                disabled={mode}
                listType="picture"
              >
                <Button>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Col>
        <Col span={10} offset={2}>
          <div className="demo-item" ref={demo} id="demo">
            {" "}
          </div>
        </Col>
      </Row>
      <Row justify="end">
        {!mode && (
          <button className="btn primary" form="formModel">
            Save
          </button>
        )}
        <button className="btn secondary" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn primary" onClick={handleCancel}>
          Cancel
        </button>
      </Row>
    </div>
  );
};
