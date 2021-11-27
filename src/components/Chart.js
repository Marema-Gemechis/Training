import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ChartComp = ({ data }) => {
  const dataObj = data.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.activity]: acc[cur.activity] + cur.duration || cur.duration,
    };
  }, {});
  console.log(dataObj);

  const labels = [];
  const values = [];

  for (let [key, val] of Object.entries(dataObj)) {
    labels.push(key);
    values.push(val);
  }

  const state = {
    labels,
    datasets: [
      {
        label: 'Trainings',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: values,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Training stats',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default ChartComp;
