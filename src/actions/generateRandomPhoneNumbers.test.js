import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import generatesRandomPhoneNumbers from './generateRandomPhoneNumbers';
import { ACTIONS } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('generateRandomPhoneNumbers actions test suite', () => {
  it('dispatches GENERATE_RANDOM_PHONE_NUMBERS after successfuly generating phone numbers', async () => {
    const store = mockStore();

    const response = await store.dispatch(generatesRandomPhoneNumbers());
    expect(response.payload.phoneNumbers.length).toBeGreaterThan(0);
    expect(response.payload.message).toEqual('Phone numbers returned successfully');
    expect(response.type).toEqual(ACTIONS.GENERATE_RANDOM_PHONE_NUMBERS);
  });
});