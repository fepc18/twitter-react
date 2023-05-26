import { Spinner, ButtonGroup, Button } from 'react-bootstrap'
import { useSearchParams, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { isEmpty } from 'lodash';
import { useDebouncedCallback } from 'use-debounce';
import BasicLayout from '../../layout/BasicLayout'

import React, { useState, useEffect } from 'react'
import { getFollowsApi } from '../../api/follow'
import ListUsers from '../../components/ListUsers';
import './Users.scss'


export default function Users(props) {
    const { setRefreshCheckLogin } = props;
    const [users, setUsers] = useState([]);

    const [searchParams] = useSearchParams();
    const params = useUsersQuery(Object.fromEntries([...searchParams]));
    const [typeUser, setTypeUser] = useState(params.type || "follow");
    const navigate = useNavigate();
    const [btnLoading, setBtnLoading] = useState(false);
    const [search, setSearch] = useState(params.search || "");
    const [page, setPage] = useState(params.page || 1);
    const onSearch = useDebouncedCallback((value) => {
        setUsers([]);
        navigate(`/users?type=${typeUser}&page=1&search=${value}`);   
        setSearch(value);     
      //  window.location.reload(); //reload page to get new params
    }, 500)

    //get users from api send type user and page
    useEffect(() => {
        getFollowsApi(queryString.stringify(params)).then(response => {
                   
            if (params.page === 1) {             
                if (isEmpty(response) || response.length === 0){                                 
                    setUsers([]);
                }                    
                else
                    setUsers(response);
            } else {
                if (isEmpty(response)) {
                    setBtnLoading(0);
                } else {
                   
                    setUsers([...users, ...response]);
                    setBtnLoading(false);
                }
            }

        }).catch(() => {
            setUsers([]);
        });

    }, [search,page,typeUser])

    //change type user
    const onChangeType = (type) => {
        setUsers([]);
        if (type === "new") {
            setTypeUser("new");
        } else {
            setTypeUser("follow");
        }
        navigate(`/users?type=${type}&page=1`);        
     

    }
    //more data to load using page, type user and search
    const moreData = () => {
        setBtnLoading(true);
        const newPage = parseInt(params.page) + 1;
        setPage(newPage);
        navigate(`/users?type=${typeUser}&page=${newPage}&search=${search}`);
    }

    return (
        <BasicLayout
            className="users"
            setRefreshCheckLogin={setRefreshCheckLogin}
            title="Users"
        >
            <div className="users__title">
                <h2>Users</h2>
                <input type="text"
                    placeholder="Search user"
                    onChange={e => onSearch(e.target.value)}
                />
            </div>
            <ButtonGroup className="users__options" >
                <Button variant={typeUser === "follow" && ("primary" || "secundary")}
                    onClick={() => onChangeType("follow")}>
                    Siguiendo</Button>
                <Button variant={typeUser === "new" && ("primary" || "secundary")}
                    onClick={() => onChangeType("new")}>Nuevos</Button>
            </ButtonGroup>
            {!users ? (
                <div className="users__loading">
                    <Spinner animation="border" variant="info" />
                    Loading users...
                </div>
            ) : (
                <>
                    <ListUsers users={users} />
                    <Button className="load-more" onClick={moreData} disabled={btnLoading}>
                        {!btnLoading ? (
                            btnLoading !== 0 ? "There are no more users" : "Load more users"
                        ) : (
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        )}
                    </Button>

                </>
            )}


        </BasicLayout>
    )
}
function useUsersQuery(entries) {

    const { page = 1, type = "follow", search } = entries;
    return { page, type, search };

}

