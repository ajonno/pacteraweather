import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import WeatherTable from 'components/WeatherTable/WeatherTable';
import Cities from 'components/Cities/Cities';

class IndexComponent extends Component {

  render() {
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
