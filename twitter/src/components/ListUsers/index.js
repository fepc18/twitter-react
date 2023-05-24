import './ListUsers.scss'
import {map,isEmpty} from 'lodash'
import User from './User'

import React from 'react'

export default function ListUsers(props) {
    const { users } = props;

    if (isEmpty(users)) {
        return (
            <div className="list-users-not-found">
                <h2>No hay resultados</h2>
            </div>
        )
    }
    return (
       <ul className="list-users">
              {map(users,(user,index)=>(
                  <li key={index}>
                        <User user={user}/>
                    </li>                    
                ))}
         </ul>


    )
}
