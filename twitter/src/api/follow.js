import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function checkFollowApi(idUser) {
    const url = `${API_HOST}/readrelationship?id=${idUser}`;
    const params = {
        headers: {
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


//Follow a user
export function followUserApi(idUser) {
    const url = `${API_HOST}/saverelationship?id=${idUser}`;
    const params = {
        method: "POST",
        headers: {
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

//Unfollow a user
export function unfollowUserApi(idUser) {
    const url = `${API_HOST}/terminaterelationship?id=${idUser}`;
    const params = {
        method: "DELETE",
        headers: {
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

//Get users that we follow
export function getFollowsApi(paramsUrl) {
    const url = `${API_HOST}/listusers?${paramsUrl}`;
    const params = {
        headers: {
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