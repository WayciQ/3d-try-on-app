import React,{useState,useEffect}  from 'react';

import {Row, Col} from 'antd';
import { Header, Footer, Body, TabsSelect, PictureWall, DetailModel } from '../components';
import {ModelCategoryService} from '../_services/ModelCategory.service';
// import captureWebsite from 'capture-website';

export const TryOnPage = () => {
    
    const handleCapture = async () => {
        // await captureWebsite.file('https://sindresorhus.com', 'screenshot.png');
        alert("take photo");
        
    }
    return (
        <>
            <Header/>
            <Body>
                <Row className="container" justify="space-between">
                    <Col span={8}>
                        <TabsSelect managerMode={false}/>
                    </Col>
                    <Col span={11}>
                        <div className="try-on-zone">
                            <div id="threejsContainer">
                                <video id="tryon-video"></video>
                            </div>
                            {/* <button className='primary btn' onClick={handleChange}>ready</button> */}
                        </div>
                       
                    </Col>
                    <Col offset={1} span={3}>
                        <div>
                            {/* <DetailModel name="Glassed" descripte="Kinh cho nguoi mu" color="Blue"/> */}
                            <button onClick={handleCapture} className='primary btn'>Take photo</button>
                            <PictureWall />
                        </div>
                    </Col>
                </Row>
            </Body>
            <Footer/>
        </>
        

    )
}