import React from 'react'
import  styles from "./Header.module.css"

const Header = ({title, children}) => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                {children}
            </header>
        </div>
    )
}

export default Header
