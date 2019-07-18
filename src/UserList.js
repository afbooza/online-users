import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './UserList.css'
import ImageIcon from '@material-ui/icons/Image';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const User = ({user}) => (
    <ListItem button>
    <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name} />
    </ListItem>
);

const UserList = ({userList, showUsers, navStateClass}) => {
    if (showUsers) {        
        return (
            <div className={'user-list user-list--' + navStateClass}>
                <List>
                    {userList.map((user, index) => (
                        
                        <User key={index} user={user} />
                    ))}
                </List>
            </div>
        );
    }
    else {
        return <div className={'user-list user-list--' + navStateClass}></div>
    }
}

export default UserList;