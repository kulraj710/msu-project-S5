import React from 'react'
import s from "../styles/Layouts/BtnSecondary.module.css"

const Button2 = ({ onClick, id, styles, type, label }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={s.btn}
                id={id}
                style={styles}
                type={type}
            >
                {label}
            </button>
        </div>
    )
}

export default Button2
