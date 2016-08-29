import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};
/**
 * `SelectField` is implemented as a controlled component, with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value){
    this.setState({value});
  } 

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Select A City" />
          <MenuItem value={2} primaryText="Sydney" />
          <MenuItem value={3} primaryText="Melbourne" />
          <MenuItem value={4} primaryText="Wollongong" />
        </SelectField>
        <br />
      </div>
    );
  }
}