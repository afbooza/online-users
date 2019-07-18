import React from 'react';
import './App.css';
import UserList from './UserList';
import OnlineNav from './OnlineNav';
import { StylesProvider } from '@material-ui/styles';
import getUsers from './mock/getUsers';
//import Axios from 'axios';

function App() {

  //set state
  const [userList, setUserList] = React.useState([]);
  const [usersReady, setUsersReady] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);

  //CALL TO JSON-SERVER
  /* React.useEffect(() => {
    Axios.get(`http://localhost:3000/data`)
      .then(res => {
        const users = res.data;
        if (users)
          setUsersReady(true);
          setUserList(users);
      })
    },[]) */

  //GET STATIC DATA
  React.useEffect(() => {
    const getUserData = async () => {
      try {
        const users = await getUsers();
        if (users)
          setUsersReady(true);
          
        setUserList(users);
      } catch (error) {
        alert("Failed to fetch users. " + error);
      }
    }
    getUserData();
  }, []);


  const toggleDisplayOfUsers = () => {
    setShowUsers(!showUsers);
  }

  return (
    <StylesProvider injectFirst>
      <div className="body">

        <OnlineNav
          toggleDisplayOfUsers={toggleDisplayOfUsers}
          navStateClass={showUsers ? 'expanded' : 'minimized'}
          usersReady={usersReady} />
        <UserList
          userList={userList}
          showUsers={showUsers}
          navStateClass={showUsers ? 'expanded' : 'minimized'} />

      </div>
    </StylesProvider>
  );
}

export default App;
