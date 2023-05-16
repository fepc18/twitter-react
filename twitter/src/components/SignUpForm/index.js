
import React, { useState } from 'react'
import { Container, Row, Col, Spinner, Form, Button } from "react-bootstrap";

import { values, size } from "lodash";
import { toast } from 'react-toastify';

import { isEmailValid } from "../../utils/validations";

import "./SignUpForm.scss";

//Sign Up Form
export default function SignUpForm(props) {
    const { setShowModal } = props;
    const [formData, setFormData] = useState(initialFormValue());


    const onSubmit = e => {
        e.preventDefault();
        let validCount = 0;
        values(formData).some(value => {
            value && validCount++;
            return null;
        });
        if (validCount !== size(formData)) {
            toast.warning("Completa todos los campos del formulario");
        }
        if (!isEmailValid(formData.email)) {
            toast.warning("Email invalido");
            return null;
        }
        if (formData.password !== formData.repeatPassword) {
            toast.warning("Las contraseñas tienen que ser iguales");
            return null;
        }
        if (size(formData.password) < 6) {
            toast.warning("La contraseña tiene que tener al menos 6 caracteres");
            return null;
        }

        toast.success("Formulario correcto");

    }
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='sign-up-form'>
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange} >
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                defaultValue={formData.name}
                                name='name'
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Apellidos"
                                defaultValue={formData.lastname}
                                name='lastname'
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="email"
                                placeholder="Correo electronico"
                                defaultValue={formData.email}
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
                                defaultValue={formData.password}
                                name="password"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Repetir contraseña"
                                defaultValue={formData.repeatPassword}
                                name="repeatPassword"
                            />
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


function initialFormValue() {
    return {
        name: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: ""
    }
}