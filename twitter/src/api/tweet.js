import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function addTweetApi(message) {
    const url = `${API_HOST}/savetweet`;
    const data = {
        message
    };
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        },
        body: JSON.stringify(data)
    };
    return fetch(url, params).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return { code: response.status, message: "Tweet enviado" };
        }
        return { code: 500, message: "Error del servidor" };
    }).catch(err => {
        return err;
    })
}

//get User's Tweets
export function getUserTweetsApi(idUser, page) {
    const url = `${API_HOST}/readtweets?id=${idUser}&page=${page}`;
    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        }
    };
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

//get user avatar   
export function getUserAvatar(avatarName) {
    const url = `${API_HOST}/getavatar?id=${avatarName}`;
    return fetch(url).then(response => {
        return response.url;
    }).catch(err => {
        return err;
    })
}