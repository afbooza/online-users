import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OnlineNav from './OnlineNav';
import BottomNavigationAction from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('OnlineNav component', () => {
    it('should render the bottom navigation', () => {
      const wrapper = shallow(<OnlineNav />);
      const bottomNavigation = wrapper.find('BottomNavigation');
      expect(bottomNavigation).toBeDefined();
    });
    it('should assert the label of the button when loaded', () => {
        const wrapper = mount(<OnlineNav />);
        expect(wrapper.find(BottomNavigationAction).props().label).toBe('Expand Online Users');
    });

    // it('should assert the label of the button when loaded', () => {
    //     const wrapper = mount(<OnlineNav />);
    //     expect(wrapper.state().buttonLabel).toBe('Expand Online Users');
    // })
  });