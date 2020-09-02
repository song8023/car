import { request } from './request';
export function gethome() {
    return request({
        url: '/home/multidata'
    })
}

export function getgoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

// import { request } from "./request";

// export function getHomeMultidata() {
//     return request({
//         url: '/home/multidata'
//     })
// }