import './LeftMenu.scss'

import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/png/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faHashtag, faStar, faUser, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons'

import TweetModal from '../Modal/TweetModal'
import { logoutApi } from '../../api/auth'
import useAuth from '../../hooks/useAuth'

export default function LeftMenu(props) {
    const { setRefreshCheckLogin } = props;
    const user = useAuth();
    const [show, setShow] = useState(false);

    const logout = () => {
        logoutApi()
        setRefreshCheckLogin(true);
        // window.location.reload()
    }


    return (
        <div className="left-menu">
            <img className="logo" src={LogoWhite} alt="Twitter" />
            <Link to="/"><FontAwesomeIcon icon={faHome} />Inicio</Link>
            <Link to={`${user?._id}`}><FontAwesomeIcon icon={faUsers} />Usuarios</Link>
            <Link to="/hashtags"><FontAwesomeIcon icon={faHashtag} />Hashtags</Link>
            <Link to="/favorites"><FontAwesomeIcon icon={faStar} />Favoritos</Link>
            <Link to="/profile"><FontAwesomeIcon icon={faUser} />Perfil</Link>
            <Link to="/settings"><FontAwesomeIcon icon={faCog} />Ajustes</Link>
            <Link to="" onClick={logout}><FontAwesomeIcon icon={faPowerOff} />Cerrar sesión</Link>

            <Button onClick={() => setShow(true)}>Twittear</Button>
            <TweetModal show={show} setShow={setShow} >
                <h2>Modal</h2>

            </TweetModal>


        </div>
    )
}
