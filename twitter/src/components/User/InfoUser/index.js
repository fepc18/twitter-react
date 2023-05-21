
import React from 'react';
import moment from 'moment';
import localization from 'moment/locale/es';
import { Location, Link, DateBirth } from '../../../utils/Icons';
import "./InfoUser.scss"


export default function InfoUser(props) {
    const { user } = props;
    return (
        <div className="info-user">
            <h2 className="name">
                {user?.name} {user?.lastName}
            </h2>
            <h3 className="email">{user?.email}</h3>
            {user?.biography && <div className="description">{user?.biography}</div>}

            <div className="more-info">
                {user?.location && (
                    <p className="mb-0"> <Location />Ubicación: {user?.location}</p>
                )}
                {user?.website && (

                    <a href={user?.website} alt={user?.website} target="_blank" rel="noopener noreferrer">
                        <Link />   {user?.website}
                    </a>
                )}
                <p>
                    <DateBirth />
                     {moment(user?.birthdate).locale("es", localization).format("LL")}
                </p>
            </div>
        </div>

    )
}
