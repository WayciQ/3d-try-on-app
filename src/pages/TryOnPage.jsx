import React from 'react';
import { useEffect } from 'react';
import '../style/TryOn.style.css';

import {
    IntializeEngine, IntializeThreejs
} from '../_common/render.js';


export const TryOnPage = () => {

    useEffect(() => {

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

        init();

        return () => {

        };
    }, []);

    return (
        <div className="row arcomp">
            <div id="threejsContainer">
                <video id="tryon-video"></video>
            </div>
        </div>

    )
}