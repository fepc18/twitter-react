import React, { useState } from 'react'
import { Container, Row, Col, Spinner, Form, Button } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from 'react-toastify';
import { isEmailValid } from "../../utils/validations";


import "./SignInForm.scss";

export default function SignInForm(props) {
    const [formData, setFormData] = useState(initialFormValue());
    const [signInLoading, setSignInLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        setSignInLoading(true);

        let validCount = 0;
        values(formData).some(value => {
            value && validCount++;
            return null;
        }
        );
        if (validCount !== size(formData)) {
            toast.warning("Completa todos los campos del formulario");
            setSignInLoading(false);
        }
        if (!isEmailValid(formData.email)) {
            toast.warning("Email invalido");
            setSignInLoading(false);
            return null;
        }
        if (size(formData.password) < 6) {
            toast.warning("La contraseña tiene que tener al menos 6 caracteres");
            setSignInLoading(false);
            return null;
        }
        console.log(formData);

    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
                                defaultValue={formData.email}
                                onChange={onChange}
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
                                onChange={onChange}
                                defaultValue={formData.password}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    {!signInLoading ? "Iniciar sesion" : <Spinner animation="border" />}
                    
                </Button>
            </Form>




        </div>
    )


}


function initialFormValue() {
    return {
        email: "",
        password: ""
    }
}