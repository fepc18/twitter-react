import { Image } from "react-bootstrap";
import "./ListTweets.scss"

import React,{useState,useEffect} from "react";
import { map } from "lodash";

import { getUserApi } from "../../api/user";
import moment from "moment";
import AvatarNotFound from "../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../utils/constants";
import {replaceURLWithHTMLLinks} from "../../utils/functions";


export default function ListTweets(props) {
    const { tweets } = props;

    if (!tweets || tweets.length === 0) {
        return <div className="list-tweets-empty">
            <h2>No hay tweets</h2>
        </div>
    }

    return (
        <div className="list-tweets">
            {
                map(tweets, (tweet, index) => (
                    <Tweet key={index} tweet={tweet} />
                ))
            }
        </div>
          
      
    )
}

function Tweet(props) {
    const { tweet } = props;
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        
        getUserApi(tweet.userId).then(response => {
            setUserInfo(response);
            
            setAvatarUrl(
                response?.avatar
                    ? `${API_HOST}/getavatar?id=${response.id}`
                    : AvatarNotFound
            );
        })

    }, [tweet])

    return (
        <div className="tweet">
            <Image className="avatar" src={avatarUrl ? avatarUrl : AvatarNotFound } roundedCircle />
            <div>
                <div className="name">
                    {userInfo?.name} {userInfo?.lastName}
                    <span>{moment(tweet.date).calendar()}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: replaceURLWithHTMLLinks(tweet.message) }} />
                
            </div>
        </div>
    )
}