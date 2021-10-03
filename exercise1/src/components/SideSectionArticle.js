import React from 'react'
import styles from "./SideSectionArticle.module.css"

export default function SideSectionArticle(props) {
    return (
        <div className={ styles.container }>
            <span className={styles.header}>{ props.header }:</span>{ props.article }
        </div>
    )
}
