import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './UserList.css'

const User = ({user}) => (
    <ListItem button>
        <ListItemText primary={user.name} />
    </ListItem>
);

const UserList = ({usersObj, toggleDisplayOfUsers}) => {
    if (usersObj.showUsers === true) {
        console.log(JSON.stringify(usersObj));
        //render component
        return (
            <div className="user-list">
                <List aria-label="Online Users">
                    {usersObj.usersList.map((user, index) => (
                        <User key={index} user={user} />
                    ))}
                </List>
            </div>
        );
    }
    else {
        return null;
    }
}

export default UserList;