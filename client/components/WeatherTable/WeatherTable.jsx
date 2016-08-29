import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
var azure = require('api/azure');


const styles = {
  propContainer: {
    width: 140,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
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

// const data = {
//   "payload": [
//     {
//       "field": "city",
//       "val": "Perth"
//     },
//     {
//       "field": "updatedTime",
//       "val": "Monday 07:18 AM"
//     },
//     {
//       "field": "weather",
//       "val": "Clouds"
//     },
//     {
//       "field": "temperature",
//       "val": "17.27"
//     },
//     {
//       "field": "wind",
//       "val": "3.6"
//     }
//   ]
// }


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
      height: '300px',
      responseData: ''
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

        azure.getWeather("sydney").then(function (response) {
                that.setState({
                    responseData: response,
                    isLoading: false
                });
               console.log(JSON.stringify(that.state.responseData));
           }, function (errorMessage) {
                that.setState({isLoading: false});
                alert(errorMessage);
           });
    }

    render() {
        var {isLoading, responseData} = this.state;

        function renderTableRows() {
            if (isLoading){
            } else if (responseData) {

              return responseData.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn style={styles.weatherItem}>{row.field}</TableRowColumn>
                  <TableRowColumn style={styles.weatherValueColumn}>{row.val}</TableRowColumn>
                </TableRow>
            ))} 
        }

        return (
          <div>
            <Table style={{width: 600}}
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              selectable={this.state.selectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}>
                <TableRow>
                  <TableHeaderColumn style={styles.weatherItem} tooltip="Weather item">Item</TableHeaderColumn>
                  <TableHeaderColumn style={styles.weatherValueColumn} tooltip="Current value">Value</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                stripedRows={this.state.stripedRows}
              >
               // {renderTableRows()}
              
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


