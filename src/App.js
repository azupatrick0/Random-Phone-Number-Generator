import React from 'react';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
