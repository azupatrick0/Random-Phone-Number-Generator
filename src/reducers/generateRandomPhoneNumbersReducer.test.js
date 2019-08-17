import generateRandomPhoneNumbersReducer from './generateRandomPhoneNumbersReducer';

describe(' Random Phone Numbers Redcuer Test Suite', () => {
  it('should returns status error when an error occurs during generating phone numbers', () => {
    const initialState = {
      generatedPhoneNumbers: {},
      status: '',
      error: ''
    };
    const state = generateRandomPhoneNumbersReducer(initialState, {
      type: 'GENERATE_RANDOM_PHONE_NUMBERS_ERROR',
      payload: 'Sorry! An error occurred while generating phone numbers, please check your internet connection and retry'
    });
    expect(state).toEqual({
      generatedPhoneNumbers: {},
      status: 'ERROR',
      error: 'Sorry! An error occurred while generating phone numbers, please check your internet connection and retry'
    });
  });

  it('should returns status success on generating phone numbers', () => {
    const initialState = {
      generatedPhoneNumbers: {},
      status: '',
      error: ''
    };
    const state = generateRandomPhoneNumbersReducer(initialState, {
      type: 'GENERATE_RANDOM_PHONE_NUMBERS',
      payload: {
        message: 'Phone numbers returned successfully',
        totalPhoneNumberGenerated: 2,
        maximumNumber: `0333333333`,
        minimumNumber: `0111111111`,
        phoneNumbers: [
          '0111111111',
          '0333333333'
        ],
      }
    });
    expect(state).toEqual({
      generatedPhoneNumbers: {
        message: 'Phone numbers returned successfully',
        totalPhoneNumberGenerated: 2,
        maximumNumber: `0333333333`,
        minimumNumber: `0111111111`,
        phoneNumbers: [
          '0111111111',
          '0333333333'
        ],
      },
      status: 'SUCCESS',
      error: ''
    });
  });

  it('should returns status loading while wating for async event to complete', () => {
    const initialState = {
      generatedPhoneNumbers: {},
      status: '',
      error: ''
    };
    const state = generateRandomPhoneNumbersReducer(initialState, {
      type: 'START_LOADING'
    });
    expect(state).toEqual({
      generatedPhoneNumbers: {},
      status: 'START_LOADING',
      error: ''
    });
  });
 
  it('should return initial state on undefined action', () => {
    const state = generateRandomPhoneNumbersReducer(undefined, {});
    expect(state).toEqual({
      generatedPhoneNumbers: {},
      status: '',
      error: ''
    });
  });
});
