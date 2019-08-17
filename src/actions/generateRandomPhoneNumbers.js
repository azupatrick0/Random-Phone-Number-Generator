import Axios from 'axios';
import { ACTIONS } from './actionTypes';
import { CONFIG } from '../config';

const generateRandomPhoneNumbers = () => async (dispatch) => {
	try {
		await dispatch({
			type: ACTIONS.START_LOADING
    });
    const response = await Axios.get(`${CONFIG.BASE_URL}/api/v1/random-phone-numbers`);
    if (response.status === 200) {
      await dispatch({
        type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS,
        payload: response.data.data
      });
    }
	} catch (error) {
		await dispatch({
			type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS_ERROR,
			payload: 'An error occurred while trying to generate random phone numbers, please try again'
		});
	}
};

export default generateRandomPhoneNumbers;
