import React from 'react';
import { addDays, subDays, format } from 'date-fns';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, LineController, BarController} from 'chart.js';
import { Chart  } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, LineController, BarController);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Share price for last 3 months',
    },
  },
}



function ChartDisplay({dataFromReact}) {

// const labels = dataFromReact.map((a,x) => (x))
const todayDate = new Date()
const getStartingDateOfData = subDays(todayDate, dataFromReact.length)
const labels = dataFromReact.map((a,x) => {
    const add2Days = addDays(getStartingDateOfData, x)

    return `${format(add2Days, "dd MMM yy")}`
})
  

const lastIndex = dataFromReact.length - 1
const data = {
    labels,
    datasets: [
      {
        type : "line",
        label: "ITC",
        data: dataFromReact.map((a, x)=> (a['Adj Close'])),
        borderColor: (dataFromReact[0]['Adj Close'] > dataFromReact[lastIndex]['Adj Close'] ? "red" : "lightgreen"),
        backgroundColor: (dataFromReact[0]['Adj Close'] > dataFromReact[lastIndex]['Adj Close'] ? "red" : "lightgreen"),
      },
    ],
  };

  return (  
    <div style={{width : "90%"}}>
    <Chart options={options} data={data} />
    </div>
  )
}

export default ChartDisplay