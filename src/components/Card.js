import React from 'react';

export const Card = ({name, url}) => {
    const initValue = {
        name: "Glassed",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
    return(
        <>
            <div className="card"> 
                <img src={!!url? url:initValue.url} alt={!!name?name:initValue.name} />
                <p>{!!name?name:initValue.name}</p>
            </div>
        </>
    )
}