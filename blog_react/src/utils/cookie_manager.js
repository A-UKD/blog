import * as cookie from "./cookie";

export function setTokenCookie(token) {
    cookie.setCookie('token', token, { 'max-age': 2592000 });
}

export function getTokenCookie() {
    return cookie.getCookie('token');
}

export function setUsernameCookie(username) {
    cookie.setCookie('username', username, { 'max-age': 2592000 });
}

export function getUsernameCookie() {
    return cookie.getCookie('username');
}

export function deleteTokenCookie() {
    cookie.deleteCookie('token');
}

export function deleteUsernameCookie() {
    cookie.deleteCookie('username');
}