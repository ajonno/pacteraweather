import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import WeatherTable from 'components/WeatherTable/WeatherTable';
import Cities from 'components/Cities/Cities';


import Azure from 'api/azure';
var axios = require('axios');

//generate the base url (to use as a template)
const AZURE_MICROSERVICE_URL = 'https://pactera-microservices.azurewebsites.net/api/GetWeatherWebhook?code=t82idxpid0ouv50nq2ofajorkk0rlppylw4mtifgqelcpiudihuqixcsybs3xkjmgi5evwvcxr';


class IndexComponent extends Component {

  render() {

    //just for testing
    //  Azure.getWeather('sydney');
            // .then(function (temp) {
            //     that.setState({
            //         location: location,
            //         temp: temp,
            //         isLoading: false
            //     });
            // }, function (errorMessage) {
            //     that.setState({isLoading: false});
            //     alert(errorMessage);
            // });

 
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>

        <AppBar style={{backgroundColor: "darkblue"}}
           iconElementLeft={<img src="client/images/pactera-logo.png" alt="MDN"/>}
        />

        <h2>Pactera Weather</h2>

        <Cities/>
        
        <WeatherTable />
      
      
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
