import React, { useEffect, useState } from 'react'
import './Home.scss'
import BasicLayout from '../../layout/BasicLayout'

import { getTweetsFollowersApi } from '../../api/tweet'

import ListTweets from '../../components/ListTweets/'
import { Spinner,Button } from 'react-bootstrap'

export default function Home(props) {
    const { setRefreshCheckLogin } = props;
    const [tweets, setTweets] = useState(null);
    const [page, setPage] = useState(1);
    const [loadingTweets, setLoadingTweets] = useState(false);

    useEffect(() => {
        getTweetsFollowersApi(page).then(response => {
            setLoadingTweets(true);
            if (!tweets && response) {
                setTweets(formatModel(response));
                setLoadingTweets(false);
            } else {
                if (!response) {
                    setLoadingTweets(0);
                } else {
                    const data = formatModel(response);
                    setTweets([...tweets, ...data]);
                    setLoadingTweets(false);
                }
            }
        }).catch(() => { }); // eslint-disable-next-line react-hooks/exhaustive-deps
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
      
        return tweetsTemp;
    }


    return (

        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin} >
            <div className="home__title">
                <h2>Inicio</h2>
            </div>
            {tweets && <ListTweets tweets={tweets} />}
            <Button className="load-more" onClick={() => setPage(page + 1)}>
                {!loadingTweets ? (
                    loadingTweets !== 0 &&
                    "Obtener mas tweets")
                    : (
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    )}
            </Button>
        </BasicLayout>


    )
}




