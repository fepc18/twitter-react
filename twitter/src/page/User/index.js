import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import BasicLayout from '../../layout/BasicLayout'
import './User.scss'
import { getUserApi } from '../../api/user';
import BannerAvatar from '../../components/User/BannerAvatar';
import { toast } from 'react-toastify';
import InfoUser from '../../components/User/InfoUser';
import ListTweets from '../../components/ListTweets';

import { getUserTweetsApi } from '../../api/tweet';
import { get } from 'lodash';



export default function User(props) {
  const { setRefreshCheckLogin } = props
  const { id } = useParams(); //user id from url
  const [user, setUser] = useState(null);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState(null);
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

  useEffect(() => {
    console.log(tweets);
    getUserTweetsApi(id, 1).then(response => {
      setTweets(response);
    }).catch(() => {
      setTweets([]);
    })
  }, [id])

  const moreData = () => {
    const pageTemp = page + 1;
    setLoadingTweets(true);
    getUserTweetsApi(id, pageTemp).then(response => {
      if (!response) {     
        setLoadingTweets(0);
      }       
       else {
        setTweets([...tweets, ...response]);
        setPage(pageTemp);       
      }
    })
      .catch(() => {
        toast.error("Error al cargar los tweets");
      })
      .finally(() => {
        setLoadingTweets(false);
      }
      )
  }



  return (
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin} >
      <div className="user__title">
        <h2> {user ? ` ${user?.name} ${user?.lastName}` : "El usuario no existe"}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />

      <InfoUser user={user} />
      <div className="user__tweets">
        <h3>Tweets</h3>
        {tweets && <ListTweets tweets={tweets} />}
        <Button onClick={moreData} >
          {!loadingTweets ? (
            loadingTweets !== 0 && "Obtener mas tweets"
          ) : (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )
          }

        </Button>
      </div>
    </BasicLayout>
  )
}


//export default withRouter(User);//withRouter es un HOC que permite pasar las propiedades de react-router-dom a un componente que no es una ruta