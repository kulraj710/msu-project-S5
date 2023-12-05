import React from 'react'
import styles from "../../styles/Home/DefaultPage.module.css"
import DefaultPageBox from './DefaultPageBox'

const DefaultPage = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.boxHeader}>FINANCIAL AI CHAT</div>
            <div className={styles.ParentContainer}>
                <DefaultPageBox
                    className={styles.firstBox}
                    head={"Interactive Chart Plotting"}
                    text={"Visualize financial data with interactive chart plotting, allowing users to track market trends, stock performance, and more."}
                />
                <DefaultPageBox
                    className={styles.firstBox}
                    head={"Q&A Capabilities"}
                    text={"Answer financial queries, provide market insights, and assist users with investment-related using AI-driven responses."}
                />
                <DefaultPageBox
                    className={styles.firstBox}
                    head={"Balance Sheet Display"}
                    text={"Instantly access and display balance sheets, income statements, and financial reports comprehensive overview of financial health."}
                />
                <DefaultPageBox
                    className={styles.firstBox}
                    head={"Portfolio Management"}
                    text={"Efficiently manage investment portfolios, review asset allocation, and receive recommendations for optimizing investments."}
                />
            </div>
        </div>
    )
}

export default DefaultPage
