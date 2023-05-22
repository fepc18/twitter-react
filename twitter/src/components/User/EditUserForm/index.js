import './EditUserForm.scss';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';

import { updateProfileApi } from '../../../api/user';


export default function EditUserForm(props) {

    const { user, setShowModal } = props;
    const [formData, setFormData] = useState(initialValueForm(user));

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);


    }

    return (
        <div className='edit-user-form'>
            <Form onSubmit={onSubmit} >
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" defaultValue={formData.name} onChange={onChange}/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellidos" defaultValue={formData.lastName} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" row="3" placeholder="Agrega tu biografía" defaultValue={formData.biography} onChange={onChange}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Sitio Web" defaultValue={formData.website} onChange={onChange}/>
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
                                onChange={value => setFormData({ ...formData, birthdate: value })}
                                
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
