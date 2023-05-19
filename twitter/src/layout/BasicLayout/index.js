import "./BasicLayout.scss"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function BasicLayout(props) {
    const {className, children } = props
    return (
        <Container className={`basic-layout ${className}`}>
            <Row>
                <Col xs={3} md={3} lg={3} className="layout__menu">  
                <h2>Menu</h2> 
                </Col>
                <Col xs={9} md={9} lg={9} className="layout__content">
                    {children}
                </Col>
            </Row>
        </Container>     


    )

}