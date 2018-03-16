const axios = require('axios');

const bakingService = {
    readAll: (query) => {
        const config = {
            method: 'GET'
        }

        return axios(`http://localhost:4040/api/baking/${query}`, config)
            .then(requestSuccess)
            .catch(requestError)
    }
}

const requestSuccess = (response) => response.data;
const requestError = (err) => {
    console.log(err);
    return Promise.reject(err);
} 

export default bakingService;