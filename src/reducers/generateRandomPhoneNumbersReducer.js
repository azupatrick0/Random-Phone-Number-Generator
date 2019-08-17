/* eslint-disable no-case-declarations */
import { ACTIONS } from '../actions/actionTypes';

const initialState = {
	generatedPhoneNumbers: {},
	status: '',
	error: ''
};

export default (state = initialState, action) => {
	
	switch (action.type) {
    case ACTIONS.START_LOADING: {
			return Object.assign({}, state, {
				status: 'START_LOADING'
			});
    }

		case ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS: {
			return Object.assign({}, state, {
				generatedPhoneNumbers: action.payload,
				status: 'SUCCESS'
			});
		}
		
		case ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS_ERROR:{
			return Object.assign({}, state, {
				status: 'ERROR',
				error: action.payload
			});
		}
		
		default:
			return state;
	}
};
