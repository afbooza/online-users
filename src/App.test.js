import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('My App', () => {
  it('should render the app and test title', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Welcome to the Online Users app!')
  })
});

