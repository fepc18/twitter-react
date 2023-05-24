import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { API_HOST } from '../../utils/constants';
import AvatarNoFound from '../../assets/png/avatar-no-found.png';

import { getUserApi } from '../../api/user'




export default function User(props) {
    const { user } = props;
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        getUserApi(user.id).then(response => {
            setUserInfo(response);
        })
    }, [user])


    return (
        <Card as={Link} to={`/${user.id}`} className="list-users__user"  >
            <Image
                width={64}
                height={64}
                roundedCircle
                className="mr-3"
                src={
                    userInfo?.avatar ? `${API_HOST}/getavatar?id=${user.id}` : AvatarNoFound
                }
                alt={`${user.nombre} ${user.apellidos}`}
            />
            <Card.Body>
                <h5>
                    {user.name} {user.lastname}
                </h5>
                <p>{user?.biography}</p>
            </Card.Body>
        </Card>

    )
}
