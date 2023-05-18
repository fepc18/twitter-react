import React from 'react'
import { Container, Row, Col, Spinner, Form, Button } from "react-bootstrap";
import "./SignInForm.scss";

export default function SignInForm(props) {

    const onSubmit = e => {
        e.preventDefault();
        console.log("Formulario enviado");
    }
    return (
        <div className='sign-in-form'>
            <h2>Entrar</h2>
            <Form onSubmit={onSubmit} >
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="email"
                                placeholder="Correo electronico"
                                name="email"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar sesion
                </Button>
            </Form>




        </div>
    )


}
