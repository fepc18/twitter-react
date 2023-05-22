import './EditUserForm.scss';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { API_HOST } from '../../../utils/constants';
import { Camera } from '../../../utils/Icons';
import { updateProfileApi, uploadBannerApi, uploadAvatarApi } from '../../../api/user';



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
    const { getRootProps: getRootBannerProps, getInputProps: getInputBannerProps } = useDropzone({ //alias
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop: onDropBanner
    })
    const onDropAvatar = (acceptedFile) => {
        const file = acceptedFile[0];
        setAvatarUrl(URL.createObjectURL(file));
        setAvatarFile(file);
    }
    const { getRootProps: getRootAvatarProps, getInputProps: getInputAvatarProps } = useDropzone({ //alias
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop: onDropAvatar
    })
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const onSubmit = e => {
        e.preventDefault();

        if (bannerFile) {
            uploadBannerApi(bannerFile).catch(() => {
                toast.error("Error al subir el nuevo banner");
            });

        }
        if (avatarFile) {
            uploadAvatarApi(avatarFile).catch(() => {
                toast.error("Error al subir el nuevo avatar");
            });
        }

        updateProfileApi(formData).then(response => {
            console.log(response);
            toast.success("Perfil actualizado");
            setShowModal(false);
        }).catch(() => {
            toast.error("Error al actualizar el perfil");
        }).finally
            (() => {
                window.location.reload();
            }
            );


    }

    return (
        <div className='edit-user-form'>
            <div className='banner' style={{ backgroundImage: `url('${bannerUrl}')` }} {...getRootBannerProps()}>
                <input {...getInputBannerProps()} />
                <Camera />
            </div>
            <div className='avatar' style={{ backgroundImage: `url('${avatarUrl}')` }} {...getRootAvatarProps()}>
                <input {...getInputAvatarProps()} />
                <Camera />
            </div>
            <Form onSubmit={onSubmit} >
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" name="name" placeholder="Nombre" defaultValue={formData.name} onChange={onChange} />
                        </Col>
                        <Col>
                            <Form.Control type="text" name="lastName" placeholder="Apellidos" defaultValue={formData.lastName} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" name="biography" row="3" placeholder="Agrega tu biografía" defaultValue={formData.biography} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" name="website" placeholder="Sitio Web" defaultValue={formData.website} onChange={onChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <DatePicker
                                placeholder="Fecha de nacimiento"
                                locale={es}
                                name="birthdate"
                                selected={new Date(formData.birthdate)}
                                onChange={value => setFormData({ ...formData, birthdate: value })}

                            />
                        </Col>
                    </Row>

                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" name="location" placeholder="Ubicación" defaultValue={formData.location} onChange={onChange} />
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
