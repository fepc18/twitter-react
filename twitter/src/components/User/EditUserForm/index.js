import './EditUserForm.scss';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { API_HOST } from '../../../utils/constants';
import { Camera } from '../../../utils/Icons';
import { updateProfileApi } from '../../../api/user';


export default function EditUserForm(props) {

    const { user, setShowModal } = props;
    const [formData, setFormData] = useState(initialValueForm(user));
    const [bannerUrl, setBannerUrl] = useState(
        user?.banner ? `${API_HOST}/getbanner?id=${user.id}` : null
    );
    const [avatarUrl, setAvatarUrl] = useState(
        user?.avatar ? `${API_HOST}/getavatar?id=${user.id}` : null
    );
    const [bannerFile, setBannerFile] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);
    
    const onDropBanner = (acceptedFile) => {
        const file = acceptedFile[0];
        setBannerUrl(URL.createObjectURL(file));
        setBannerFile(file);
    }   
    const {getRootProps: getRootBannerProps,getInputProps:getInputBannerProps }=useDropzone({ //alias
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop: onDropBanner
    }) 
    const onDropAvatar = (acceptedFile) => {
        const file = acceptedFile[0];
        setAvatarUrl(URL.createObjectURL(file));
        setAvatarFile(file);
    }



    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        console.log(bannerFile);
    }

    return (
        <div className='edit-user-form'>
            <div className='banner' style={{ backgroundImage: `url('${bannerUrl}')` }} {...getRootBannerProps()}>
                <input {...getInputBannerProps()} />
                <Camera/>
            </div>

            <Form onSubmit={onSubmit} >
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" defaultValue={formData.name} onChange={onChange} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellidos" defaultValue={formData.lastName} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" row="3" placeholder="Agrega tu biografía" defaultValue={formData.biography} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Sitio Web" defaultValue={formData.website} onChange={onChange} />
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
