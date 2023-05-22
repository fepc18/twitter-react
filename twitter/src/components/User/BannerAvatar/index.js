import './BannerAvatar.scss'
import React, { useEffect, useState } from 'react'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png';
import { API_HOST } from '../../../utils/constants';
import { Button } from 'react-bootstrap';
import { checkFollowApi,followUserApi,unfollowUserApi } from '../../../api/follow';

import ConfigModal from '../../Modal/ConfigModal';
import EditUserForm from '../EditUserForm';

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const bannerUrl = user?.banner ? `${API_HOST}/getbanner?id=${user.id}` : null;
  const avatarUrl = user?.avatar ? `${API_HOST}/getavatar?id=${user.id}` : AvatarNotFound;
  const [showModal, setShowModal] = useState(false);
  const [following, setFollowing] = useState(null);

  const [reloadFollow, setReloadFollow] = useState(false);

  //Check if the user is following the logged user for show the button
  useEffect(() => {
    if (user) {
      checkFollowApi(user.id).then(response => {
        if (response?.status) {
          setFollowing(true);
        } else {
          setFollowing(false);
        }
      })
    }
    setReloadFollow(false);
  }, [user,reloadFollow])

  //Function for follow the user
  const onfollow = () => {
    followUserApi(user.id).then(() => {
      setReloadFollow(true);
    })
  }

  //Function for unfollow the user
  const onunfollow = () => {
    unfollowUserApi(user.id).then(() => {
      setReloadFollow(true);
    })
  }
    

  return (
    <div className='banner-avatar' style={{ backgroundImage: `url('${bannerUrl}')` }}>
      <div className='avatar' style={{ backgroundImage: `url('${avatarUrl}')` }} />
      {user && (
        <div className='options'>
          {user.id === loggedUser._id && <Button onClick={()=>setShowModal(true)}>Editar Perfil</Button>}
          {loggedUser._id !== user.id && 
          (following !==null  &&
            (following? (
              <Button className="unfollow" onClick={onunfollow}><span>Siguiendo</span></Button>): 
              <Button onClick={onfollow} >Seguir</Button>
            )
           )}
        </div>

      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Editar Perfil">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>

  )
}


