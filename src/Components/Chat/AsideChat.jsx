import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import imagem from "../Images/rafael.png"
import "../Styles/AsideChat.css"
import { useContext } from 'react';
import {ContextChat} from './ContextChat';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const  AsideChat = () => {
  
  const userChat = useContext(ContextChat);

  function handleClick(event) {
    userChat.setUserChat(event.target.innerText); 
  }
 
  return (
    <aside>
    <List dense className={"list-chat-contact"}>
      {["Teste1","Teste2"].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={` ${imagem}`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <span>online</span>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </aside>
  );
}