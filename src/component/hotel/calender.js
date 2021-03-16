import React, { Component,useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker,SingleDatePicker } from 'react-dates';

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="App">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
      </div>
    );
  }
}
export const SingleCalender=()=>{
  const [date, setDate] = useState()
  const [focused, setFocused] = useState()

  return(
<SingleDatePicker
  date={date} 
  onDateChange={date => setDate( date )}
  focused={focused}
  onFocusChange={({ focused }) => setFocused( focused )} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/>
  )
}
export default Calender;