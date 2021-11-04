import React from 'react';
import { useEffect } from 'react';
import {
    IntializeEngine, IntializeThreejs
} from '../_common/render.js';
import {Row, Col} from 'antd';
import { Header, Footer, Body, TabsSelect, PictureWall } from '../components';

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
            IntializeThreejs("Sunglasses2");
            IntializeEngine();
        }
    }
    const handleChange = () => {
        init();
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
                        <button className='primary btn'>Take photo</button> <br/>
                        <PictureWall />
                    </Col>
                </Row>
            </Body>
            <Footer/>
        </>
        

    )
}