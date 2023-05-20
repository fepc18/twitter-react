import './BannerAvatar.scss'
import React from 'react'
import { API_HOST } from '../../../utils/constants';

export default function BannerAvatar(props) {
    const { user } = props;
    const bannerUrl = user?.banner ? `${API_HOST}/getbanner?id=${user.id}` : null;
    // const avatarUrl = user?.avatar? `${API_HOST}/getavatar?id=${user.id}` : null;
    console.log(bannerUrl);
    return (
        <div className='banner-avatar' style={{ backgroundImage: `url('${bannerUrl}')` }}>
          
        </div>
    )
}


