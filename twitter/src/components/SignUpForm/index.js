
import React from 'react'
import { Container, Row, Col, Spinner, Form, Button } from "react-bootstrap";

import "./SignUpForm.scss";
//Sign Up Form
export default function SignUpForm(props) {
    const { setShowModal } = props;

    const onSubmit = e => {
        e.preventDefault();
        console.log("Formulario enviado");
        setShowModal(false);
    }

    return (
        <div className='sign-up-form'>
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellidos" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                    <Form.Control type="email" placeholder="Correo electronico" />

                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>

                            <Form.Control type="password" placeholder="Contraseña" />
                        </Col>
                        <Col>
                            <Form.Control type="password" placeholder="Repetir contraseña" />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>

        </div>
    )
}
