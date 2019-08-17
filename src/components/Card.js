import React from 'react';

const Card = ({ title, cardValue}) => (
  <div style={{
    height: '25vh',
    borderRadius: 4,
    width: '20vw',
    boxShadow: '1px 1px 4px plum',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: '1vh',
    fontWeight: 'bold',
  }}>
    <div style={{ fontSize: 20 }}>{title}</div>
    <div style={{paddingTop: '4vh', fontSize: 40, fontWeight: 'bold'}}>{cardValue}</div>
  </div>
)

export default Card;
