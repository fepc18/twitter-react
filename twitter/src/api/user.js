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

            return response.json();
        })
        .then((result) => {

            return result;
        })
        .catch((err) => {

            return err;
        });
}

export function updateProfileApi(data) {
    const url = `${API_HOST}/modifyprofile`;

    const params = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`,
        },
        body: JSON.stringify(data),
    };

    return fetch(url, params)
        .then((response) => {

            return response;
        })
        .catch((err) => {

            return err;
        });
}
export function uploadBannerApi(file) {
    const url = `${API_HOST}/uploadbanner`;

    const formData = new FormData();
    formData.append("banner", file);

    const params = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getTokenApi()}`,
        },
        body: formData,
    };

    return fetch(url, params)
        .then((response) => {

            return response.json();
        })
        .then((result) => {

            return result;
        })
        .catch((err) => {

            return err;
        });
}

export function uploadAvatarApi(file) {
    const url = `${API_HOST}/uploadavatar`;

    const formData = new FormData();
    formData.append("avatar", file);

    const params = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getTokenApi()}`,
        },
        body: formData,
    };

    return fetch(url, params)
        .then((response) => {

            return response.json();
        })
        .then((result) => {

            return result;
        })
        .catch((err) => {

            return err;
        });
}