import React from 'react'
import styles from "./MainArticle.module.css"
import img from './img1.jpg'





export default function MainArticle(props) {
    return (
        <div className={ styles.container }>
            <div>
            <img className= {styles.image} src={props.image}></img>
            </div>
            
            <div className= {styles.titleContainer}  >
                <span className={ styles.header }>{ props.header }</span>
                <span className={ styles.article }>{ props.article }</span>
            </div>
        </div>
    )
}
