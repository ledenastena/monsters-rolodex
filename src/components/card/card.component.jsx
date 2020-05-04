import React from 'react';
import './card.styles.css'

export const Card = (props) => (
  <div className='card-container'>
    <img width='200' src={`https://robohash.org/${props.monster.id}.png?size=200x200&set=set2`} alt=''/>
    <h2>{ props.monster.name }</h2>
    <p>{ props.monster.email }</p>
  </div>
)