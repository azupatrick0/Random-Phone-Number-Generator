import { createStore, applyMiddleware, combineReducers } from 'reduxe_modules/redux';
import { composeWithDevTools } from 'redux-devtools-extensiontools-extension';
import thunk from 'redux-thunkles/redux-thunk';
import {
    SigninReducer,
} from './reducers/index';

const rootReducer = combineReducers({
  signin: SigninReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;