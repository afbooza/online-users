import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './UserList';

Enzyme.configure({ adapter: new Adapter() });

describe('UserList component', () => {
    it('should render the bottom navigation', () => {
      const wrapper = shallow(<UserList />);
      expect(wrapper).toBeDefined();
    });

    it('should load the User component', () =>{
        const mockUser = [{"name":"BakerMayfield"}];
        const wrapper =shallow(<UserList />)
        wrapper.setProps({userList:mockUser});
        let userComponent = wrapper.find('User');
        expect(userComponent).toBeDefined();
    });
});