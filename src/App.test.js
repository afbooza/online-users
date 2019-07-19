import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import OnlineNav from './OnlineNav';
import UserList from './UserList';

Enzyme.configure({ adapter: new Adapter() });


describe('My App', () => {
  it('should render the app and test title', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Welcome to the Online Users app!');
  });

  it('should test the initial state of the app', () => {
    const wrapper = mount(<App />);
    const onlineNavComponent= wrapper.find(OnlineNav);
    const usersListComponent= wrapper.find(UserList)
    expect(onlineNavComponent.props().usersReady).toBe(false);
    expect(onlineNavComponent.props().navStateClass).toBe("minimized");
    expect(usersListComponent.props().userList.length).toBe(0);
    expect(usersListComponent.props().showUsers).toBe(false);
    expect(usersListComponent.props().navStateClass).toBe("minimized");
  });


});

