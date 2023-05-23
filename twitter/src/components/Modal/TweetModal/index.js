import './TweetModal.scss'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import classNames from 'classnames';

import { Close } from "../../../utils/Icons";

export default function TweetModal(props) {
    const { show, setShow, children } = props;
    const [message, setMessage] = useState("");

    const MaxLength = 280;

    const onSubmit = e => {
        e.preventDefault();
        console.log('Enviando tweet');
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
