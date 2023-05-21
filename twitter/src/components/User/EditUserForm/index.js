import './EditUserForm.scss';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { updateProfileApi } from '../../../api/user';

export default function EditUserForm(props) {

    const { user, setShowModal } = props;
    const { name, lastName, biography, location, website } = user;

    const onSubmit = e => {
        e.preventDefault();


    }

    return (
        <div className='edit-user-form'>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" defaultValue={user.name} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellidos" defaultValue={user.lastName} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" row="3" placeholder="Agrega tu biografía" defaultValue={user.biography} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Sitio Web" defaultValue={user.website} />
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