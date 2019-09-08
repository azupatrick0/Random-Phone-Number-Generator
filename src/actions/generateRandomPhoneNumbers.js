import { ACTIONS } from './actionTypes';
import generateRandomPhoneNumbers from '../helpers/generateRandomPhoneNumbers';
import { toast } from 'react-toastify';

const generatesRandomPhoneNumbers = () => async (dispatch) => {
	try {
		await dispatch({
			type: ACTIONS.START_LOADING
    });
    const response = await generateRandomPhoneNumbers();
    if (response) {
      toast.success('Hurray! Phone numbers generated successfully', {
        position: toast.POSITION.TOP_RIGHT
      });
      return dispatch({
        type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS,
        payload: response
      });
    }
	} catch (error) {
    toast.error(
      'Sorry! An error occurred while generating phone numbers, please check your internet connection and retry',
      {
        position: toast.POSITION.TOP_CENTER
      }
    );
		return dispatch({
			type: ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS_ERROR,
			payload: 'An error occurred while trying to generate random phone numbers, please try again'
		});
	}
};

export default generatesRandomPhoneNumbers;
