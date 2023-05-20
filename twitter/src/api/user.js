import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function getUserApi(id) {
    const url = `${API_HOST}/viewprofile?id=${id}`;
    
    const params = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokenApi()}`,
        },
    };
    
    return fetch(url, params)
        .then((response) => {
        console.log(response);
        return response.json();
        })
        .then((result) => {
        console.log(result);
        return result;
        })
        .catch((err) => {
        console.log(err);
        return err;
        });
}