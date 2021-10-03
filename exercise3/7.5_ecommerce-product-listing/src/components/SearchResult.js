import React from 'react';
import Rating from './Rating';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {


  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.manufacturer }</div>
          <div>${ props.price }</div>
          <Rating rating= {props.rating} />
        </div>
    </div>
  )
}
