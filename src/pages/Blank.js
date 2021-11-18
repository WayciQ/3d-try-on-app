import React, {useEffect} from 'react'
import { Header, Footer, Body } from '../components';
import { displayModelToScence } from '../_common/displayModel';
export const Blank = () => {


    useEffect(() => {
        displayModelToScence("purple1");
        return () => {
            
        };
    }, []);

    return(
        <>
             <Header/>
             <Body>
                <div className="" id="blank"></div>
            </Body>
            <Footer/>
        </>
    )
}


