import Cookies from 'js-cookie';

const TokenKey = localStorage.getItem("token");

export function getToken() {
   return Cookies.get(TokenKey);
}

export function setToken(token, time) {
   return Cookies.set(TokenKey, token, {
      expires: time,
      path: '/'
   });
}

export function removeToken() {
   return Cookies.remove(TokenKey);
}