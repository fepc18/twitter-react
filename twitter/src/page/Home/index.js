import React from 'react'
import './Home.scss'
import BasicLayout from '../../layout/BasicLayout'

export default function Home(props) {
    const {setRefreshCheckLogin} = props;
    return (

        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin} >
            <h1>Estamos en Home</h1>
        </BasicLayout>


    )
}