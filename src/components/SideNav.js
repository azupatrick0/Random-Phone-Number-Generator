import React from 'react';
import Button from './Button';

const SideNav = ({ className, displaySideNav, sortPhoneNumbersAscending, sortPhoneNumbersDescending, generateCSV }) => (
	<div className={className}>
		<span
			style={{ color: 'red', fontSize: 40, display: className === 'side-nav-mobile' ? 'block' : 'none' }}
			onClick={displaySideNav}
		>
			&times;
		</span>
		<p
			style={{
				textAlign: 'center',
				fontWeight: 'bold',
				fontFamily: 'Verdana',
				color: 'white',
				fontSize: 20
			}}
		>
			Sort Phone Numbers
		</p>
		<div style={{ textAlign: 'center' }}>
			<Button
				btnBackgroundColor="#0000bb"
				btnText="ASCENDING ORDER"
				onClick={sortPhoneNumbersAscending}
				width="92%"
				border="0"
			/>
			<Button
				btnBackgroundColor="#aa0000"
				btnText="DESCENDING ORDER"
				onClick={sortPhoneNumbersDescending}
				width="92%"
				border="0"
			/>
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontFamily: 'Verdana',
					color: 'white',
					fontSize: 20
				}}
			>
				Export Phone Numbers
			</p>
			<Button
				btnBackgroundColor="#0000bb"
				btnText="EXPORT PHONE NUMBERS"
				onClick={generateCSV}
				width="92%"
				border="0"
			/>
		</div>
		<span className="side-nav__footer">
			Built with &#x2665; by{' '}
			<a
				href="https://www.linkedin.com/in/patrick-azu-22028a14b/"
				style={{ color: 'white', textDecoration: 'none' }}
			>
				Patrick Azu
			</a>
		</span>
	</div>
);

export default SideNav;
