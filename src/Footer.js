import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import './Footer.css';
import { StylesProvider } from "@material-ui/styles";

const Footer = ({toggleDisplayOfUsers}) => {
  const [value, setValue] = React.useState(0);

  // Idea to create element from scratch
  // const openUserList = () => {
  //   let chatWindow = document.createElement("div");
  //   let chatWindowContent = document.createTextNode("hey");
  //   chatWindow.appendChild(chatWindowContent);
  //   console.log('open user list');
  //   let root = document.getElementById("root");
  //   let footer = document.getElementById("footer");
  //   root.insertBefore(chatWindow, footer );
  // }

  //Need to put this onto the <BottomNavigationAction element> 
  //after getting from the UserList component --> onClick={() => toggleDisplayOfUsers}

  const handleToggleUsers = () => {
    console.log("handle toggle in Footer Comp");
    toggleDisplayOfUsers();
  }

  return (
    <footer id="footer">
      <StylesProvider injectFirst>
        <BottomNavigation 
          className="bottom-navigation"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction 
            className="bottom-navigation button--online-users" 
            onClick={() => handleToggleUsers()}
            label="Online Users" 
            icon={<PersonIcon />} />
        </BottomNavigation>
      </StylesProvider>
    </footer>
  );
}

export default Footer;