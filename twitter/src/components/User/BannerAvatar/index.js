import './BannerAvatar.scss'
import React from 'react'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png';
import { API_HOST } from '../../../utils/constants';
import { Button } from 'react-bootstrap';


export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const bannerUrl = user?.banner ? `${API_HOST}/getbanner?id=${user.id}` : null;
  const avatarUrl = user?.avatar ? `${API_HOST}/getavatar?id=${user.id}` : AvatarNotFound;

  return (
    <div className='banner-avatar' style={{ backgroundImage: `url('${bannerUrl}')` }}>
      <div className='avatar' style={{ backgroundImage: `url('${avatarUrl}')` }} />
      {user && (
        <div className='options'>
          {user.id === loggedUser._id && <Button>Editar Perfil</Button>}
          {loggedUser._id !== user.id && <Button>Seguir</Button>}
        </div>

      )}

    </div>

  )
}


