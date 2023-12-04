import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StockDoughnutChart = () => {
    const data = {
        labels: ['HDFC', 'AAPL', 'ICICI BANK', 'Reliance', 'ITC', 'TCS'],
        datasets: [
          {
            label: '# of Votes',
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
              'white'
            ],
            borderWidth: 2,
          },
        ],
      };

      const styles = {
        // backgroundColor : "lightgrey",
        width : "400px",
        height : "400px",
        padding : "1rem"
    }
  return (
    <div style={styles}>
        <Doughnut data={data} />
    </div>
  )
}

export default StockDoughnutChart