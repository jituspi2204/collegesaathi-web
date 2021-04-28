import React from 'react'
import styles from './Button.module.css'

const Button = ({ type='button', title, onClickHandler }) => {
    return (
        <button
            className={`${type} === 'iconButton' ? ${styles.iconButton} : ${styles.button}`}     
            onClick={onClickHandler}
        >{title}</button>
    )
}

export default Button
