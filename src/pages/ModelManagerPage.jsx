import React,{useState,useEffect} from 'react'
import { Header, Footer, Body, TabsSelect, ModelForm } from '../components';
import {Row, Col} from 'antd';
import {ModelCategoryService} from '../_services/ModelCategory.service';
import {ModelService} from '../_services/Model.service';
import { displayModelToScence } from '../_common/displayModel';
import { useDispatch, useSelector } from 'react-redux';
import { findAllAction } from '../redux/action';

export const ModelManagerPage = () => {

    return(
        <>
            <Header/>
            <Body>
                <Row className="container" justify="space-between">
                        <Col span={8}>
                            <TabsSelect managerMode={true}/>
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


