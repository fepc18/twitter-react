import './BannerAvatar.scss'
import React, { useState } from 'react'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png';
import { API_HOST } from '../../../utils/constants';
import { Button } from 'react-bootstrap';

import ConfigModal from '../../Modal/ConfigModal';
import EditUserForm from '../EditUserForm';

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const bannerUrl = user?.banner ? `${API_HOST}/getbanner?id=${user.id}` : null;
  const avatarUrl = user?.avatar ? `${API_HOST}/getavatar?id=${user.id}` : AvatarNotFound;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='banner-avatar' style={{ backgroundImage: `url('${bannerUrl}')` }}>
      <div className='avatar' style={{ backgroundImage: `url('${avatarUrl}')` }} />
      {user && (
        <div className='options'>
          {user.id === loggedUser._id && <Button onClick={()=>setShowModal(true)}>Editar Perfil</Button>}
          {loggedUser._id !== user.id && <Button>Seguir</Button>}
        </div>

      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Editar Perfil">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>

  )
}


