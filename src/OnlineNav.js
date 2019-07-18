import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import './OnlineNav.css';

const OnlineNav = ({ toggleDisplayOfUsers, usersReady, navStateClass }) => {

  const [buttonLabel, setButtonLabel] = React.useState("Expand Online Users");

  let iconMod = "disabled";

  if (usersReady === true) {
    iconMod = "enabled";
  }

  const handleToggleUsers = () => {
    toggleDisplayOfUsers();
    buttonLabel === "Expand Online Users" ? setButtonLabel("Minimize Online Users") : setButtonLabel("Expand Online Users")
  }

  return (

    <BottomNavigation
      className={'bottom-nav bottom-nav--' + navStateClass}
      showLabels
      onClick={() => handleToggleUsers()}
    >
      <BottomNavigationAction
        
        label={buttonLabel}
        classes={{ label: 'bottom-nav__button__online-label' }}
        value="online"
        icon={<PersonIcon className={'bottom-nav__button__online-label-icon--' + iconMod} />} />
    </BottomNavigation>

  );
}

export default OnlineNav;