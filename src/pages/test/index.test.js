import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedRandomPhoneNumberGenerator, { RandomPhoneNumberGenerator } from '../index';

configure({ adapter: new Adapter() });

const props = {
  generatesRandomPhoneNumbers: jest.fn(),
  getDerivedStateFromProps: jest.fn(),
};

const state = {
  sorting: false,
  paginationStarted: false
}

describe('RandomPhoneNumberGenerator Client Test suite', () => {

  it('renders connected RandomPhoneNumberGenerator component without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedRandomPhoneNumberGenerator {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders RandomPhoneNumberGenerator component without crashing', () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should generate random phone numbers', async () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    await wrapper.instance().generateRandomPhoneNumbers();
    expect(wrapper.instance().state.visible).toBe(true);
    expect(wrapper.instance().props.generatesRandomPhoneNumbers).toHaveBeenCalled();
  });

  it('should sort phone numbers in ascending order', () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    wrapper.setState({
      phoneNumbers: [
        '034539393',
        '044539393',
        '024539393',
        '014539393'
      ]
    });
    wrapper.instance().sortPhoneNumbersAscending();
    expect(wrapper.instance().state.sorting).toBe(true);
    expect(wrapper.instance().state.phoneNumbers).toEqual([
      '014539393',
      '024539393',
      '034539393',
      '044539393',
    ]);
  });

  it('should sort phone numbers in descending order', () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    wrapper.setState({
      phoneNumbers: [
        '034539393',
        '044539393',
        '024539393',
        '014539393'
      ]
    });
    wrapper.instance().sortPhoneNumbersDescending();
    expect(wrapper.instance().state.sorting).toBe(true);
    expect(wrapper.instance().state.phoneNumbers).toEqual([
      '044539393',
      '034539393',
      '024539393',
      '014539393'
    ]);
  });

  it('should handle pagination of generated phone numbers', async () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    wrapper.setState({
      start: 0,
			end: 5,
			paginationStarted: false
    });
    await wrapper.instance().handlePagination(2);
    expect(wrapper.instance().state.paginationStarted).toBe(true);
    expect(wrapper.instance().state.start).toEqual(10);
    expect(wrapper.instance().state.end).toEqual(15);
  });

  it('handle getDeriveStateFromProps Success', () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    wrapper.setProps({
      generatedRandomPhoneNumbers: {
        status: 'SUCCESS',
        generatedPhoneNumbers: {
          phoneNumber: [
            '044539393',
            '034539393',
            '024539393',
            '014539393'
          ]
        }
      }
    });
    wrapper.setState({
      sorting: false,
			paginationStarted: false
    });
    expect(wrapper.state().visible).toEqual(false);
    expect(wrapper.state().status).toEqual('SUCCESS');
  });

  it('handle getDeriveStateFromProps Error', () => {
    const wrapper = shallow(<RandomPhoneNumberGenerator {...props}/>);
    wrapper.setProps({
      generatedRandomPhoneNumbers: {
        status: 'ERROR',
        generatedPhoneNumbers: {
          phoneNumber: [
            '044539393',
            '034539393',
            '024539393',
            '014539393'
          ]
        }
      }
    });
    wrapper.setState({
      visible: false
    });
    expect(wrapper.state().visible).toEqual(false);
    expect(wrapper.state().status).toEqual('ERROR');
  });
});
