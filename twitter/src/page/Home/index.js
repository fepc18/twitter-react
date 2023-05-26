import React from 'react'
import './Home.scss'
import BasicLayout from '../../layout/BasicLayout'

export default function Home(props) {
    const { setRefreshCheckLogin } = props;
    return (

        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin} >
            <div className="home__title">
                <h2>Inicio</h2>
            </div>
            <p>Lista de Tweets</p>
            <p>Cargar mas Tweets</p>
        </BasicLayout>


    )
}