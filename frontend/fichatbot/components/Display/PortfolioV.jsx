import React from 'react'
import styles from "../../styles/Display/portfolio.module.css"
import StockDoughnutChart from './StockDoughnutChart'
import StockPieChart from './StockPieChart'

const PortfolioV = () => {
  return (
    <div>
          <h2 className={styles.heading}>Portfolio Performance</h2>
      <div className={styles.container}>
        <div className={styles.box}>
            <div>
              <p>Invested</p>
              <div>$10,567.43</div>
            </div>
            <div>
              <p>Present Value</p>
              <div>$10,567.43</div>
            </div>
            <div>
              <p>Unrealized P&L</p>
              <div style={{color : "green"}}>$10,567.43 , <span>8.82%</span></div>
            </div>
        </div>



        <div className={styles.chartContainer}>
          <div>
        <StockPieChart  />
        </div>
        <div>
          <StockDoughnutChart/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioV