import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

import './DateRangeDropdown.css';

const DateRangeDropdown = ({ onChange }) => {
  const [label, setLabel] = useState('July 1, 2025 - July 31, 2025');

  const handleApply = (event, picker) => {
    const start = picker.startDate.format('MMMM D, YYYY');
    const end = picker.endDate.format('MMMM D, YYYY');
    setLabel(`${start} - ${end}`);
    if (onChange) onChange({ startDate: picker.startDate, endDate: picker.endDate });
  };

  return (
    <DateRangePicker
      initialSettings={{
        startDate: moment('2025-07-01'),
        endDate: moment('2025-07-31'),
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month'),
            moment().subtract(1, 'month').endOf('month')
          ],
        },
        locale: { format: 'MM/DD/YYYY' },
      }}
      onApply={handleApply}
    >
      <div className="date-range-wrapper">
        <div className="date-range-display">
          <i className="fa fa-calendar" /> &nbsp;
          <span>{label}</span> &nbsp;
          <i className="fa fa-caret-down" />
        </div>
      </div>
    </DateRangePicker>
  );
};

export default DateRangeDropdown;
