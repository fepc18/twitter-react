import { Spinner, ButtonGroup, Button } from 'react-bootstrap'
import { useSearchParams } from "react-router-dom";
import queryString from 'query-string';
import { isEmpty } from 'lodash';
import BasicLayout from '../../layout/BasicLayout'

import './Users.scss'
import React, { useState, useEffect } from 'react'
import { getFollowsApi } from '../../api/follow'
import ListUsers from '../../components/ListUsers';







export default function Users(props) {
    const { setRefreshCheckLogin, location } = props;
    const [users, setUsers] = useState(null);
    const [typeUser, setTypeUser] = useState("follow");
    const [searchParams] = useSearchParams();
    const params = useUsersQuery(Object.fromEntries([...searchParams]));


    //get users from api send type user and page
    useEffect(() => {
        getFollowsApi(queryString.stringify(params)).then(response => {
            if (isEmpty(response)) 
                setUsers([]);
            else
                setUsers(response);
        })
    }, [])



    return (
        <BasicLayout
            className="users"
            setRefreshCheckLogin={setRefreshCheckLogin}
            title="Users"
        >
            <div className="users__title">
                <h2>Users</h2>
                <input type="text" placeholder="Search user" />
            </div>
            <ButtonGroup className="users__options" >
                <Button>Siguiendo</Button>
                <Button>Nuevos</Button>
            </ButtonGroup>
            {!users ? (
                <div className="users__loading">
                    <Spinner animation="border" variant="info" />
                    Loading users...
                </div>
            ) : (
                <ListUsers users={users} />
            )}


        </BasicLayout>
    )
}
function useUsersQuery(entries) {

    const { page = 1, type = "follow", search } = entries;
    return { page, type, search };

}

