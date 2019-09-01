import React from 'react';

const Button = ({ btnBackgroundColor, btnText, onClick, width, border }) => (
	<button
		type="button"
    onClick={onClick}
    className='side-nav__button'
		style={{
			backgroundColor: btnBackgroundColor,
			color: 'white',
			height: '7vh',
			width: width,
			cursor: 'pointer',
      borderRadius: 4,
      border: border
		}}
	>
		{btnText}
	</button>
);

export default Button;
