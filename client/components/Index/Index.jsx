import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Cities from 'components/Cities/Cities';

export default class IndexComponent extends Component {

  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <div>
        <div>       
            <AppBar style={{backgroundColor: "darkblue"}}
              iconElementLeft={<img src="client/images/pactera-logo.png" alt="MDN"/>}
            />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <div>  
              <h2>Weather Forecast</h2>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
              <Cities/>
            </div>
        </div>
     </div>

    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

// const styles = {
//   container:{
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center'
//   }
// };