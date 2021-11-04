import React from 'react'
import { Header, Footer, Body, TabsSelect, ModelForm } from '../components';
import {Row, Col, Form, Upload, Input} from 'antd';
export const ModelManagerPage = () => {


    return(
        <>
            <Header/>
            <Body>
                <Row className="container" justify="space-between">
                        <Col span={8}>
                            <TabsSelect haveAddCategory={true}/>
                        </Col>
                        <Col span={15} offset={1}>
                            <ModelForm />
                        </Col>
                </Row>
            </Body>
            <Footer/>
        </>
    )
}


