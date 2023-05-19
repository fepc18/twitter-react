import './LeftMenu.scss'

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/png/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faHashtag, faStar, faUser, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons'



export default function LeftMenu() {
    return (
        <div className="left-menu">
            <img className="logo" src={LogoWhite} alt="Twitter" />
            <Link to="/"><FontAwesomeIcon icon={faHome}/>Inicio</Link>
            <Link to="/users"><FontAwesomeIcon icon={faUsers}/>Usuarios</Link>
            <Link to="/hashtags"><FontAwesomeIcon icon={faHashtag}/>Hashtags</Link>
            <Link to="/favorites"><FontAwesomeIcon icon={faStar}/>Favoritos</Link>
            <Link to="/profile"><FontAwesomeIcon icon={faUser}/>Perfil</Link>
            <Link to="/settings"><FontAwesomeIcon icon={faCog}/>Ajustes</Link>
            <Link to="/logout"><FontAwesomeIcon icon={faPowerOff}/>Cerrar sesión</Link>

            <Button>Twittear</Button>
         

        </div>
    )
}
