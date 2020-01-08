import axios from 'axios';
import { getToken } from 'service/cookie';
import { Message } from 'element-ui';
//var token=localStorage.getItem("token");
const service = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
        "X-Req-platform":"0",
    },
    baseURL: 'http://www.szbwg.ts.artron.net/api',
});
const serviceForm = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
        "X-Req-platform":"0",
    },
    baseURL: 'http://www.szbwg.ts.artron.net/api',
});
//http://www.szbwg.ts.artron.net
//http request 拦截器
let request = function (config) {
    const token = localStorage.getItem("token");
    //console.log(token,55555555)
    const key="X-Req-Auth";
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers[key] = token;
    }
    return config;
};
let request_err = function (err) {
    return Promise.reject(err);
};


// http response 拦截器
let response = function (res) {
    const data = res.data;
    const message = `${data.code}--${data.msg}` || '未知错误'
    if (res.status == 200) {
        if (data.code == 0) {
            return data;
        } else {
            Message({
                message: message,
                type: 'error',
            })
        }
    }
};

let response_err = function (err) {
    if (err.response) {
        const data = err.response.data;
        const message = `${data.code}--${data.msg}` || '未知错误'
        Message({
            message: message,
            type: 'error',
        })
    }
    return Promise.reject(err);
};

service.interceptors.request.use(request, request_err);
serviceForm.interceptors.request.use(request, request_err);

service.interceptors.response.use(response, response_err);
serviceForm.interceptors.response.use(response, response_err);

window.service = service;
window.serviceForm = serviceForm;

