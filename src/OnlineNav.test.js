import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OnlineNav from './OnlineNav';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
    it('should assert the click of the button is initially by checking whether the label changes', () => {
        const wrapper = mount(<OnlineNav />);
        const button = wrapper.find(BottomNavigationAction);
        button.simulate('click');
        expect(wrapper.find(BottomNavigationAction).props().label).toBe('Expand Online Users');
    });
    it('should assert the label of the button after clicked after users are loaded', (done) => {
        const wrapper = mount(<OnlineNav />);
        const button = wrapper.find(BottomNavigationAction);
        const test = async () => {
            await button.simulate('click');
            expect(wrapper.find(BottomNavigationAction).props().label).toBe('Minimize Online Users');
            expect(wrapper.props().usersList.length).toBeGreaterThan(1);
        }
        setTimeout(() => {
            test();
            done();
        }, 4000);
    });
});