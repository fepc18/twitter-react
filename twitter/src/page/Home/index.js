import React, { useEffect, useState } from 'react'
import './Home.scss'
import BasicLayout from '../../layout/BasicLayout'

import { getTweetsFollowersApi } from '../../api/tweet'

import ListTweets from '../../components/ListTweets/'

export default function Home(props) {
    const { setRefreshCheckLogin } = props;
    const [tweets, setTweets] = useState(null);
    const [page, setPage] = useState(1);
    const [loadingTweets, setLoadingTweets] = useState(false);

    useEffect(() => {
        getTweetsFollowersApi(page).then(response => {
           
            if (!tweets && response) {
                setTweets(formatModel(response));
            } else {
                if (!response) {
                    setLoadingTweets(0);
                } else {
                    const data = formatModel(response);
                    setTweets([...tweets, ...data]);
                    setLoadingTweets(false);
                }
            }
        }).catch(() => { });
    }, [page])

    const formatModel = (tweets) => {

        const tweetsTemp = [];
        tweets.forEach(tweet => {
            tweetsTemp.push({
                _id: tweet._id,
                userId: tweet.userRelationId,
                message: tweet.Tweet.message,
                date: tweet.Tweet.date
            })
        });
        console.log(tweetsTemp);
        return tweetsTemp;
    }


    return (

        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin} >
            <div className="home__title">
                <h2>Inicio</h2>
            </div>
            {tweets && <ListTweets tweets={tweets} />}
        </BasicLayout>


    )
}




