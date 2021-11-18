import React from 'react';
import {
    IntializeEngine, IntializeThreejs
} from '../_common/render.js';
import {Row, Col} from 'antd';
import { Header, Footer, Body, TabsSelect, PictureWall, DetailModel } from '../components';
// import captureWebsite from 'capture-website';

export const TryOnPage = () => {
    async function init() {
        var video = document.getElementById('tryon-video');

        await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                facingMode: 'user',
            }
        }).then(stream => {
            video.srcObject = stream;
        });

        video.oncanplay = (e) => {
            video.play();
            IntializeThreejs("purple1");
            IntializeEngine();
        }
    }
    const handleChange = () => {
        init();
    }

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
                        <TabsSelect haveAddCategory={false}/>
                    </Col>
                    <Col span={11}>
                        <div className="try-on-zone">
                            <div id="threejsContainer">
                                <video id="tryon-video"></video>
                            </div>
                            <button className='primary btn' onClick={handleChange}>ready</button>
                        </div>
                       
                    </Col>
                    <Col offset={1} span={3}>
                        <div>
                            <DetailModel name="Glassed" descripte="Kinh cho nguoi mu" color="Blue"/>
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