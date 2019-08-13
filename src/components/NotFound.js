import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div style={{ marginTop: '40vh', textAlign: 'center', fontSize: 50, fontWeight: 'bold', fontFamilt: 'Arial', color: 'red' }}>
      Page Not Found
    </div>
    <div style={{ marginTop: '2vh', textAlign: 'center', fontSize: 20, fontWeight: 'bold', fontFamilt: 'Arial', color: 'green' }}><Link to='/'>Back to home</Link></div>
  </>
);

export default NotFound;
