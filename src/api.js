import axios from 'axios';

const getAPI = (uri) => {
    return axios.get(`${uri}`);
}

export { getAPI }