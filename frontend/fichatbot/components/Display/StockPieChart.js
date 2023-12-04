import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);





const StockPieChart = () => {
    const data = {
        labels: ['HDFC', 'AAPL', 'ICICI BANK', 'Reliance', 'ITC', 'TCS'],
        datasets: [
          {
            labels: ['Value A', 'Value B', 'Value C'],
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
      
      const options = {
        plugins: {
          legend: {
            display: true,
          },
          datalabels: {
            color: 'white',
            formatter: (value, context) => {
              const label = context.chart.data.labels[context.dataIndex];
              return `${label}: ${value}`;
            },
          },
        },
      };
    const styles = {
        // backgroundColor : "lightgrey",
        width : "400px",
        height : "400px",
        padding : "1rem"
    }
    return (
        <div style={styles}>
            <Pie data={data} options={options}/>
        </div>
    )
}

export default StockPieChart