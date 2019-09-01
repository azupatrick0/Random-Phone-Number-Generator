import React from 'react';

const Table = ({ serialNumber, tableValue}) => (
  <div className='table-space'>
    <div style={{ padding: '0.5rem 0', fontSize: 20, fontWeight: 'bold', width: '30vw', backgroundColor: 'rgba(90, 14, 90, 0.8)', color: 'white' }}>{serialNumber}</div>
    <div style={{ padding: '0.5rem 0', fontSize: 20, fontWeight: 'bold', width: '60vw',  backgroundColor: 'rgb(90, 14, 90)', color: 'white' }}>{tableValue}</div>
  </div>
)

export default Table;
