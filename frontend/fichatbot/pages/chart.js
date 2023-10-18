import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineController,
  BarController
} from 'chart.js';
import { Chart  } from 'react-chartjs-2';
import { postData } from '../Helper/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineController,
  BarController
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



function ChartComp() {

    const [showChart, setShowChart] = React.useState(false)
    const [dataFromReact, setData] = React.useState([{"Adj Close" : "0"}])

    function showChartHandler() {
        const r = postData("http://127.0.0.1:5000/chat", { "req": "display a chart for me" })
            r.then(res => {
                // console.log(typeof(res.res))
                console.log((res.res))
                setData(res.res.response)
                setShowChart(true)
                // setChatArray((prev) => [...prev, { id: Math.random() * 10, message: res.res, time: new Date(), sender: 1 }])
            }).catch((err) => {
                alert('Error', err)
                console.log(err)
            })
    }

const labels = dataFromReact.map((a,x) => (x))
const lastIndex = dataFromReact.length - 1
const data = {
    labels,
    datasets: [
      {
        type : "line",
        label: "Adani WILmar",
        data: dataFromReact.map((a, x)=> (a['Adj Close'])),
        borderColor: (dataFromReact[0]['Adj Close'] > dataFromReact[lastIndex]['Adj Close'] ? "red" : "lightgreen"),
        backgroundColor: (dataFromReact[0]['Adj Close'] > dataFromReact[lastIndex]['Adj Close'] ? "red" : "lightgreen"),
      },
    ],
  };

  return (  
  <div>
    <button onClick={showChartHandler}>SHow</button>
    <div style={{width : "80vw"}}>
    {showChart ? <Chart options={options} data={data} /> : "Click on show"}
    </div>
  </div>
  )
}

export default ChartComp