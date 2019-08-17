import Axios from 'axios';
import { ACTIONS } from './actionTypes';
import generateRandomPhoneNumbers from '../helpers/generateRandomPhoneNumbers';

const generatesRandomPhoneNumbers = () => async (dispatch) => {
	try {
		await dispatch({
			type: ACTIONS.START_LOADING
    });
    const response = await generateRandomPhoneNumbers();
    if (response) {
      return dispatch({
        type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS,
        payload: response
      });
    }
	} catch (error) {
		return dispatch({
			type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS_ERROR,
			payload: 'An error occurred while trying to generate random phone numbers, please try again'
		});
	}
};

export default generatesRandomPhoneNumbers;
