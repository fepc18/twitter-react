import './TweetModal.scss'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

import { Close } from "../../../utils/Icons";

export default function TweetModal(props) {
    const { show, setShow, children} = props;
    return (           
        <Modal className='tweet-modal' onHide={()=>setShow(false)} show={show} centered size="lg">
            <Modal.Header>
                <Modal.Title>
                    <h2>Modal</h2>
                    <Close onClick={()=>setShow(false)} />
                </Modal.Title>
            </Modal.Header>
        
        </Modal>

  )
}
