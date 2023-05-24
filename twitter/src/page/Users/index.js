import { Spinner, ButtonGroup, Button } from 'react-bootstrap'
import BasicLayout from '../../layout/BasicLayout'
import './Users.scss'
import React from 'react'


export default function Users(props) {
    const { setRefreshCheckLogin } = props;
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
        </BasicLayout>
    )
}
