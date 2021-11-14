import React from 'react';
import { Row, Col } from 'antd';
import { NavLink  } from 'react-router-dom';

export const Header = () => {
    return(
        <Row className="header" align='middle' justify='start'>
            <Col xs={10} sm={10} md={12} lg={12} xl={4} className="logo">
                <span>Virtua try-on</span>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="menu">
                <Row className="menu-list" justify="start" align='bottom'>
                    <NavLink  className="menu-item" activeClassName="menu-item active" id='ModelManagerPage' to="/ModelManagerPage">Model Manager</NavLink>
                    <NavLink  className="menu-item" activeClassName="menu-item active" id='TryOnPage' to="/TryOnPage">TryOn</NavLink>
                    <NavLink  className="menu-item" activeClassName="menu-item active" id='Blank' to="/Blank">Blank</NavLink>
                </Row>
            </Col>
        </Row>
    )
}