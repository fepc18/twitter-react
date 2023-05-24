import { Spinner, ButtonGroup, Button } from 'react-bootstrap'
import BasicLayout from '../../layout/BasicLayout'
import './Users.scss'
import React,{useState,useEffect} from 'react'
import { getFollowsApi } from '../../api/follow'




export default function Users(props) {
    const { setRefreshCheckLogin } = props;
    const [users, setUsers] = useState(null);
    const [typeUser, setTypeUser] = useState("follow");

  //get users from api send type user and page
    useEffect(() => {
        getFollowsApi("page=1&type=follow").then(response => {
       // getFollowsApi(typeUser, 1).then(response => {
            setUsers(response);
        })
        console.log(users);
    }, [typeUser])



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
