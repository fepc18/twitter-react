import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'bootstrap'
import { useParams } from 'react-router-dom';

import BasicLayout from '../../layout/BasicLayout'
import './User.scss'
import { getUserApi } from '../../api/user';


export default function User(props) {
  const { setRefreshCheckLogin } = props
  const { id } = useParams();
  const [ user, setUser ] = useState(null);


  useEffect(() => {
    getUserApi(id).then(response => {
      setUser(response);
    }).catch(() => {
      setUser({});
    }).finally(() => {

    }) 
  }, [id])





  return (
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin} >
      <div className="user__title">
        <h2></h2>
      </div>
      <div className="user__container">
        <div className="user__container__info">
          <h3>Datos de usuario</h3>
          <div className="user__container__info__item">
            <p>Nombre: {user?.name}</p>
            <p>Apellido: {user?.lastName}</p>
          </div>
          <div className="user__container__info__item">
            <p>Email: {user?.email}</p>
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


//export default withRouter(User);//withRouter es un HOC que permite pasar las propiedades de react-router-dom a un componente que no es una ruta