import React from 'react';
import './App.css';
import UserList from './UserList';
import Footer from './Footer';



function App() {

  //setState Object
  const [usersObj, setUser] = React.useState({
    usersList: [
      { name: "Antonio" },
      { name: "Jeffrey" },
      { name: "Sarah" },
      { name: "Sam" },
      { name: "Paul" }
    ],
    showUsers: true
  });

  //need to pass this over to the Footer component
  const toggleDisplayOfUsers = () => {
    console.log('toggle users');
    setUser(usersObj.showUsers = !usersObj.showUsers);
  }


  return (
    <div>
      <UserList usersObj={usersObj}
      ></UserList>
      <Footer toggleDisplayOfUsers = {toggleDisplayOfUsers} ></Footer>
    </div>
  );
}

export default App;
