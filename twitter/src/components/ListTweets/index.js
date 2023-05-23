import { Image } from "react-bootstrap";
import "./ListTweets.scss"

import React,{useState,useEffect} from "react";
import { map } from "lodash";
import { getUserAvatar } from "../../api/tweet";
import moment from "moment";



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

    useEffect(() => {
        if (tweet.avatar) {
            getUserAvatar(tweet.avatar).then(response => {
                setAvatarUrl(response);
            })
        } else {
            setAvatarUrl(null);
        }
    }, [tweet])

    return (
        <div className="tweet">
            <Image className="avatar" src={avatarUrl ? avatarUrl : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} roundedCircle />
            <div>
                <div className="name">
                    {tweet.name} {tweet.lastName}
                    <span>{moment(tweet.date).calendar()}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: tweet.message }} />
            </div>
        </div>
    )
}