import React from 'react'
import styles from "../../styles/Home/DefaultPage.module.css"

const DefaultPageBox = ({ text, className, head }) => {
    return (
        <div className={className}>
            <h3>{head}</h3>
            <p>{text}</p>
        </div>
    )
}

export default DefaultPageBox
