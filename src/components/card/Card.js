import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, titleIcon, content }) => {

    const icons = titleIcon?.map((item) => {
        return (
            <div className={styles.cardTitleIconItem}>
                {item}
            </div>
        )
    })

    let leftContent = null
    let rightContent = null
    if( content !== undefined) {
        leftContent = Object.keys(content)?.map((key) => {
            return (
                <h3 className={styles.leftContentItem}>
                    {key}
                </h3>
            )
        })

        rightContent = Object.values(content)?.map((value) => {
            return (
                <h3 className={styles.rightContentItem}>
                    {value}
                </h3>
            )
        })
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeading}>
                <h2 className={styles.cardTitle}>
                    {title}
                </h2>
                <div className={styles.cardTitleIcon}>
                    {icons}
                </div>
            </div>
            { leftContent !== null ? 
                <div className={styles.cardContentContainer}>
                    <div className={styles.cardContent}>
                        {leftContent}
                    </div>
                    <div className={styles.cardContent}>
                        {rightContent}
                    </div>
                </div>
            : null }
        </div>
    )
}

export default Card
