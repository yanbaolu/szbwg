/* get请求 */
export function get(url) {
    return service.get(url);
}
/* get请求带参数 */
export function get2(url,data) {
	return service.get(url, {
		params: data
    });
}
/* post请求带参数 */
export function post(url,data) {
	return service.post('api/post', data);
}