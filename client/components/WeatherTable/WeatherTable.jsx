import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
var azure = require('api/azure');

const styles = {
  propContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  weatherItem: {
    width: '70px'
  },
  weatherValueColumn: {
    width: '70px'
  }
};

const data = {
  "payload": []
}

//generate the base url (to use as a template)
const AZURE_MICROSERVICE_URL = 'https://pactera-microservices.azurewebsites.net/api/GetWeatherWebhook?code=t82idxpid0ouv50nq2ofajorkk0rlppylw4mtifgqelcpiudihuqixcsybs3xkjmgi5evwvcxr';

export default class WeatherTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showCheckboxes: false,
      fixedHeader: true,
      stripedRows: true,
      showRowHover: false,
      selectable: false,
      height: '300px'
    };
  }

  componentDidMount(){
        var config = {
            headers: {'content-type': 'application/json'}
        };

        var that = this;    //needed because 'this' isnt in scope 
                            //in the promise callback below. 
                            //were just getting a 'handle' on this so we can ref it

        this.setState({isLoading: true});
    }

    componentWillUpdate(nextProps, nextState){
      data.payload = nextProps.responseData;
    }

    render() {
        var {isLoading} = this.state;

        return (
          <div>

            <Table style={{width: 500}}
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              selectable={this.state.selectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}>
                <TableRow>
                  <TableHeaderColumn style={styles.weatherItem} tooltip="Weather item">Weather Item</TableHeaderColumn>
                  <TableHeaderColumn style={styles.weatherValueColumn} tooltip="Current value"></TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                stripedRows={this.state.stripedRows}
              >
              
                {data.payload.map( (row, index) => (
                  <TableRow key={index} selected={row.selected}>
                    <TableRowColumn style={styles.weatherItem}>{row.field}</TableRowColumn>
                    <TableRowColumn style={styles.weatherValueColumn}>{row.val}</TableRowColumn>
                  </TableRow>
                ))}
              
              </TableBody>

            </Table>
          </div>
        );
    }
}


