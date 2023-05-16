
import React from 'react'
import {Modal} from 'react-bootstrap'
import LogoWithTwitter from '../../../assets/png/logo-white.png'
import './BasicModal.scss'

export default function BasicModal(props ) {
    const {show, setShow, children} = props
  return (
    <Modal className='basic-modal' centered size="lg" show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
            <Modal.Title>
                <img src={LogoWithTwitter} alt="Twitter" />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
  )
}
