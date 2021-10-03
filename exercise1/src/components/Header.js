import React from 'react'
import styles from "./Header.module.css"


export default function header() {
    return (
        <div className= { styles.headerBackground }>
        
            <div className= { styles.container }>

                <div className = { styles.brand }>Helsingin Sanomat</div>
                <div className = { styles.btn }>Etusivu</div>
                <div className = { styles.btn }>Uutiset</div>
                <div className = { styles.btn }>Lehdet</div>
                <div className = { styles.btn }>Asiakaspalvelu</div>
                <div className = { styles.btn }>Tilaa</div>
                <div className = { styles.btn }>Kirjadu</div>
                <div className = { styles.btn }>Valikko</div>

            </div>

        </div>
    )
}
