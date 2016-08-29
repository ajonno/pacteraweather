var axios = require('axios');

//generate the base url (to use as a template)
const AZURE_MICROSERVICE_URL = 'https://pactera-microservices.azurewebsites.net/api/GetWeatherWebhook?code=t82idxpid0ouv50nq2ofajorkk0rlppylw4mtifgqelcpiudihuqixcsybs3xkjmgi5evwvcxr';

module.exports = {

    getWeather: function(city) {
        //build the url. 
        //var encodedLocation = encodeURIComponent(city);
        //var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        var config = {
            headers: {'content-type': 'application/json'}
        };

        axios.post(AZURE_MICROSERVICE_URL, { city: this.city}, config)
            .then(function(res){
                console.log(JSON.stringify(res.data));
                return res.data;
        }, function (res) {
            throw new Error(res.data.message);
        });  

        // return axios.get(requestUrl)
        //     .then(function (res) {
        //         if (res.data.cod && res.data.message){
        //             throw new Error(res.data.message);            
        //         } else {
        //             console.log(JSON.stringify(res.data));
        //             return res.data.main.temp;
        //         }
        // }, function (res) {
        //     throw new Error(res.data.message);
        // });
   
    }
}

