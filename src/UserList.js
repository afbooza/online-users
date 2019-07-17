import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './UserList.css'

const User = (user) => (
    <ListItem button>
        <ListItemText primary="hi" />
    </ListItem>
);

const UserList = () => {
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

    if (usersObj.showUsers === true) {
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