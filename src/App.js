import React from 'react';
import './App.css';
import UserList from './UserList';
import Footer from './Footer';
import { StylesProvider } from '@material-ui/styles';
import getUsers from './mock/getUsers';

function App() {

  //set state
  const [userList, setUserList] = React.useState([]);
  const [usersReady, setUsersReady] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);
  const [navStateClass, setNavStateClass] = React.useState("minimized");

  React.useEffect(() => {
    const getUserData = async () => {
      try {
        const users = await getUsers();
        if(users)
          setUsersReady(true);
          setUserList(users);
      } catch (error) {
        alert("Failed to fetch users. " + error);
      }
    }
    getUserData();
  });

  const toggleDisplayOfUsers = () => {
    setShowUsers(!showUsers);
    navStateClass === "minimized" ? setNavStateClass("expanded") : setNavStateClass("minimized"); 
  }

  return (
    <StylesProvider injectFirst>
      <div className="body">
        <UserList 
          userList={userList} 
          showUsers={showUsers} 
          navStateClass={navStateClass}/>
        <Footer toggleDisplayOfUsers={toggleDisplayOfUsers} 
          navStateClass = {navStateClass} usersReady = {usersReady} />
      </div>
    </StylesProvider>
  );
}

export default App;
