import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelect({ defaultValue, onDateChange }) {
  const [selectDate, setSelectDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectDate}
        onChange={date => setSelectDate(date)}
        minDate={new Date()}
        isClearable
        value={defaultValue}
        onChange={onDateChange}
      />
    </div>
  );
}
