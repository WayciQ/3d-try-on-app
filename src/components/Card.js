import React from 'react';
import { findByModelIdAction } from '../redux/action';
import { useDispatch } from 'react-redux';
import {displayModelToScence} from "../_common/displayModel"
import {
    IntializeEngine, IntializeThreejs,
} from '../_common/render.js';
export const Card = ({name, url, idData, managerMode}) => {
    const dispatch = useDispatch();
    const initValue = {
        name: "Name",
        url: "https://picsum.photos/200"
    }

    async function init(name) {
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
            console.log(e)
            video.play();
            IntializeThreejs(name);
            IntializeEngine();
        }
        
    }
    const handleClick = () => {
        var video = document.getElementById('tryon-video');
        dispatch(findByModelIdAction(idData))
        if(managerMode) {
            displayModelToScence(name)
        } else {
            video.pause()
            init(name)
        }
    }
    return(
        <>
            <div onClick={handleClick} className="card"> 
                <img src={!!url? url:initValue.url} alt={!!name?name:initValue.name} />
                <p>{!!name?name:initValue.name}</p>
            </div>
        </>
    )
}