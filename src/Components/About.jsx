import React from 'react';
import './Homepage.css';

const monthsData = [
  { month: 'January', value: 40 },
  { month: 'February', value: 70 },
  { month: 'March', value: 20 },
  { month: 'April', value: 50 },
  { month: 'May', value: 65 },
  { month: 'june', value: 0 },
  { month: 'july', value: 60 },
  { month: 'Agust', value: 0 },
  { month: 'sept', value: 60 },
  { month: 'Oct', value: 70 },
  { month: 'nov', value: 0 },
  { month: 'Dec', value: 90 },
  // Add more months' data here...
];

const BarGraph = () => {
  return (
    <div className="bar-graph-container">
    <h5 className="top-left-heading">Left Heading</h5>
    <div className="bar-graph">
      {monthsData.map((month, index) => (
        <div
          key={index}
          className={`bar ${month.value === 0 ? 'zero-value' : ''}`}
          style={{ height: `${month.value}%` }}
        >
          {month.month}
          <div className="value">{`${month.value}%`}</div>
        </div>
      ))}
    </div>
    <h5 className="top-right-heading">Right Heading</h5>
  </div>
  
  );
};

export default BarGraph;
