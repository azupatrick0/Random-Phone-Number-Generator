import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import generateRandomPhoneNumbersReducer from './reducers/generateRandomPhoneNumbersReducer';

const rootReducer = combineReducers({
  generatedPhoneNumbers: generateRandomPhoneNumbersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;