import React from 'react'
import { Button,Spinner } from 'bootstrap'
import BasicLayout from '../../layout/BasicLayout'

import './User.scss'


export default function User(props) {
  const {setRefreshCheckLogin} = props
  return (
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin} >
      <div className="user__title">
        <h2>Felipe Esteban Pabon</h2>
      </div>
      <div className="user__container">
        <div className="user__container__info">
          <h3>Datos de usuario</h3>
          <div className="user__container__info__item">
            <p>Nombre:</p>
            <p>Nombre Apellido</p>
          </div>
          <div className="user__container__info__item">
            <p>Email:</p>
           </div>
          <div className="user__container__info__item">
            <p>Fecha de nacimiento:</p>
            <p>DD/MM/YYYY</p>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}
