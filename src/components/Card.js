import React from 'react';

const Card = ({ title, cardValue}) => (
  <div className='card'>
    <div style={{ fontSize: 20 }}>{title}</div>
    <div style={{paddingTop: '4vh', fontSize: 35, fontWeight: 'bold'}}>{cardValue}</div>
  </div>
)

export default Card;
