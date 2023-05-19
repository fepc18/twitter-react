import "./BasicLayout.scss"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftMenu from "../../components/LeftMenu"

export default function BasicLayout(props) {
    const {className, children,setRefreshCheckLogin } = props
    return (
        <Container className={`basic-layout ${className}`}>
            <Row>
                <Col xs={3} md={3} lg={3} className="layout__menu">  
                <LeftMenu setRefreshCheckLogin={setRefreshCheckLogin} />
                </Col>
                <Col xs={9} md={9} lg={9} className="layout__content">
                    {children}
                </Col>
            </Row>
        </Container>     


    )

}