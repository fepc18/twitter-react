import './EditUserForm.scss';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';

import { updateProfileApi } from '../../../api/user';


export default function EditUserForm(props) {

    const { user, setShowModal } = props;
    const { name, lastName, biography, location, website } = user;
    const [formData, setFormData] = useState(initialValueForm(user));

    const onSubmit = e => {
        e.preventDefault();


    }

    return (
        <div className='edit-user-form'>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" defaultValue={formData.name} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellidos" defaultValue={formData.lastName} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" row="3" placeholder="Agrega tu biografía" defaultValue={formData.biography} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Sitio Web" defaultValue={formData.website} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <DatePicker
                                placeholder="Fecha de nacimiento"
                                locale={es}
                                selected={new Date(formData.birthdate)}
                                onChange={date => console.log(date)}
                                
                            />
                        </Col>
                    </Row>

                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Ubicación" defaultValue={formData.location} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit" className="btn-submit">
                                Actualizar
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setShowModal(false)} variant="outline-secondary" type="submit" className="btn-submit">
                                Cancelar
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
}

function initialValueForm(user) {
    return {
        name: user.name ? user.name : "",
        lastName: user.lastname ? user.lastname : "",
        biography: user.biography ? user.biography : "",
        location: user.location ? user.location : "",
        website: user.website ? user.website : "",
        birthdate: user.birthdate ? user.birthdate : "",
    }
}
