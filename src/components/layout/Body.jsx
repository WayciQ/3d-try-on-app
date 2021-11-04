import React from 'react';
import { Row } from 'antd';

export const Body = (props) => {
    return (
        <Row className="body">
            {props.children}
        </Row>
        
    )
}