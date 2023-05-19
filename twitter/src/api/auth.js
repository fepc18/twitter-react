import { API_HOST,TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";


export function signUpApi(user) {
    const url = `${API_HOST}/register`;

    // const userTemp = user;
    const userTemp = { ...user, email: user.email.toLowerCase() }
    delete userTemp.repeatPassword;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTemp)
    };
    return fetch(url, params).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        return { code: 404, message: "Email no disponible" };
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })

}

export function signInApi(user) {
    const url = `${API_HOST}/login`;
    const data = {
        ...user,
        email: user.email.toLowerCase()
    }
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch(url, params).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        return { message: "Usuario o contraseña incorrectos" };
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    })
}

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token); //must use session storage
}
export function getTokenApi() {
    return localStorage.getItem(TOKEN);
}

export function logoutApi() {
    localStorage.removeItem(TOKEN);
}

export function isUserLoggedApi() {
    const token = getTokenApi();
    if (!token) {
        logoutApi();
        return null;
    }
    if (isExpiredToken(token)) {
        logoutApi();
    }
    return decodeToken(token);   
}

function isExpiredToken(token) {
    const { exp } = decodeToken(token);
    const expire = exp * 1000;
    const timeout = expire - Date.now();
    if (timeout < 0) {
        return true;
    }
    return false;
}

function decodeToken(token) {
    return jwtDecode(token);
}
