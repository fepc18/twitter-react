import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'bootstrap'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import BasicLayout from '../../layout/BasicLayout'
import './User.scss'
import { getUserApi } from '../../api/user';
import BannerAvatar from '../../components/User/BannerAvatar';
import { toast } from 'react-toastify';
import InfoUser from '../../components/User/InfoUser';


export default function User(props) {
  const { setRefreshCheckLogin } = props
  const { id } = useParams(); //user id from url
  const [user, setUser] = useState(null);
  const loggedUser = useAuth(); //user logged

  useEffect(() => {
    getUserApi(id).then(response => {
      if (!response)
        toast.error("El usuario que has visitado no existe");
      setUser(response);
    }).catch(() => {
      toast.error("El usuario que has visitado no existe");
      setUser({});
    }).finally(() => {

    })
  }, [id])





  return (
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin} >
      <div className="user__title">
        <h2> {user ? ` ${user?.name} ${user?.lastName}` : "El usuario no existe"}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <div className="user__container">
        <div className="user__container__info">
          <InfoUser user={user} />
        </div>
      </div>
    </BasicLayout>
  )
}


//export default withRouter(User);//withRouter es un HOC que permite pasar las propiedades de react-router-dom a un componente que no es una ruta