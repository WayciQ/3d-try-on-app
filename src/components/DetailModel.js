import React from 'react';

export const  DetailModel = ({name,descripte,color}) => {

    return(
        <>
            <p>{name}</p>
            <p>Descripte: {descripte}</p>
            <p>Color: {color}</p>
        </>
    )
}