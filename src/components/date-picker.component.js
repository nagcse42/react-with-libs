import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd-MMM-yyyy"
        minDate={new Date()}
        maxDate={new Date("01-12-2025")}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      ></DatePicker>
    </div>
  );
}

export default DatePickerComponent;
