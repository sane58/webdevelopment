import React from 'react'
import styles from "./Notifications.module.css"

export default function Notifications(props) {
    return (
        <div className={ styles.container }>
            <span className={styles.header}>{ props.topic }:</span>{ props.body }
        </div>
    )
}
