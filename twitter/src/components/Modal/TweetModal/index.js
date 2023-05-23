import './TweetModal.scss'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import classNames from 'classnames';


import { Close } from "../../../utils/Icons";
import { addTweetApi } from '../../../api/tweet';
import { toast } from 'react-toastify';


export default function TweetModal(props) {
    const { show, setShow, children } = props;
    const [message, setMessage] = useState("");

    const MaxLength = 280;

    const onSubmit = e => {
        e.preventDefault();
        if(message.length>MaxLength || message.length<1){
            toast.warning("El tweet debe tener entre 1 y 280 caracteres");         
            return;
        }
        if (message.length > 0 && message.length <= MaxLength) {
            addTweetApi(message).then(response => {
                if (response?.code >= 200 && response?.code < 300) {
                    toast.success(response.message);
                    setShow(false);
                    window.location.reload();
                }
            }).catch(() => {
                toast.error("Error al enviar el tweet");
            })
        }
            

    }

    onchange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <Modal className='tweet-modal' onHide={() => setShow(false)} show={show} centered size="lg">
            <Modal.Header>
                <Modal.Title>
                    <Close onClick={() => setShow(false)} />
                </Modal.Title>           

            </Modal.Header>
            <Modal.Body>
                    <Form  onSubmit={onSubmit}>
                        <Form.Control as="textarea"
                             rows="6" 
                             placeholder="¿Qué está pasando?"  
                             onChange={onchange}
                        />
                        <span className={classNames("count",{error:message.length>MaxLength})}>
                            {message.length}
                        </span>
                        <Button 
                            type="submit"
                            disabled={message.length>MaxLength || message.length<1}
                        >
                            Twittear
                            </Button>
                    </Form>

                </Modal.Body>

        </Modal>

    )
}
