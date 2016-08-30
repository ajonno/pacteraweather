import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
var azure = require('api/azure');
import WeatherTable from 'components/WeatherTable/WeatherTable';

/**
 * `SelectField` is implemented as a controlled component, with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class Cities extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        responseData: []
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value){
      this.setState({value: value});
      if (value != 0) {
        var that = this;
        azure.getWeather(value).then(function (response) {
            that.setState({
                responseData: response
            });
        }, function (errorMessage) {
              alert(errorMessage);
        });
      }
    } 

    render() {
        var {responseData} = this.state;
        console.log("responseData = " + responseData);
        function confirmSelection() {

            if (responseData === ""){
                return<h3 className="text-center">Fetching weather...</h3>;
            } else  {
              return  <WeatherTable responseData={responseData}/>
            } 
        }

        return (
          <div>
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={0} primaryText="Select A City" />
              <MenuItem value={"Melbourne"} primaryText="Melbourne" />
              <MenuItem value={"Sydney"} primaryText="Sydney" />
              <MenuItem value={"Wollongong"} primaryText="Wollongong" />
            </SelectField>

            {confirmSelection()}
          </div>
      );
    }
}