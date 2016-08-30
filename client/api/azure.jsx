var axios = require('axios');

const AZURE_MICROSERVICE_URL = 'https://pactera-microservices.azurewebsites.net/api/GetWeatherWebhook?code=t82idxpid0ouv50nq2ofajorkk0rlppylw4mtifgqelcpiudihuqixcsybs3xkjmgi5evwvcxr';

module.exports = {

    getWeather: function(city) {
        var config = {
            headers: {'content-type': 'application/json'}
        };

        return axios.post(AZURE_MICROSERVICE_URL, {city: city}, config)
        .then(function(res){
            return res.data.payload;
        }, function (res) {
            throw new Error(res.data.message);
        });  
    }
}

