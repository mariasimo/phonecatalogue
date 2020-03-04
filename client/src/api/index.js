import axios from 'axios';

// data api calls
export default function apiCall (method, url) {
    return axios(url, {
        method
    })
    .then(response => response.data)
}