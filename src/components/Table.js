import React from 'react';

const Table = ({ serialNumber, tableValue}) => (
  <div style={{
    borderRadius: 4,
    boxShadow: '1px 1px 4px plum',
    display: 'flex',
    textAlign: 'center',
    width: '40vw',
    borderBottom: '1px solid white'
  }}>
    <div style={{ fontSize: 30, fontWeight: 'bold', width: '30vw', backgroundColor: 'gray', color: 'white' }}>{serialNumber}</div>
    <div style={{ fontSize: 30, fontWeight: 'bold', width: '60vw',  backgroundColor: 'plum', color: 'white' }}>{tableValue}</div>
  </div>
)

export default Table;
