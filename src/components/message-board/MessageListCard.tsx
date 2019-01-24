import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import { Classes } from 'jss';
import IUser from '../../models/user.model';
import IMessage from '../../models/message.model';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
const messageListCardStyles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

interface IMessageListCardProps {
  classes: Classes;
  users: IUser[];
  currentMessage: IMessage;
  messages: IMessage[];
  activeUser: IUser;
  setActiveMessage: Function;
  setMode: Function;
  deleteMessage: Function;
}

interface IMessageListCardState {
  expanded: boolean;
}

class MessageListCard extends React.Component<
  IMessageListCardProps,
  IMessageListCardState
> {
  public state = { expanded: false };

  public handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  public render() {
    const {
      classes,
      users,
      currentMessage,
      messages,
      setActiveMessage,
      setMode,
      deleteMessage,
      activeUser
    } = this.props;
    const author: IUser = users.find(
      (user: IUser) => user.id === currentMessage.author
    );
    const childMessages: IMessage[] = messages.filter(
      (message: IMessage) => message.parentId === currentMessage.id
    );

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar alt="" src={author.imageUrl} />}
          title={currentMessage.message}
          subheader={author.name}
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing={true}>
          {currentMessage.author === activeUser.id ? (
            <React.Fragment>
              <IconButton
                aria-label="Edit message"
                onClick={() => {
                  setActiveMessage(currentMessage);
                  setMode('Edit');
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="Delete message"
                onClick={() => deleteMessage(currentMessage.id)}
              >
                <DeleteIcon />
              </IconButton>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeUser.id ? (
                <IconButton
                  aria-label="Comment message"
                  onClick={() => {
                    setActiveMessage(currentMessage);
                    setMode('Comment');
                  }}
                >
                  <CommentIcon />
                </IconButton>
              ) : null}
            </React.Fragment>
          )}
          {childMessages.length ? (
            <React.Fragment>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Display comments"
              >
                <ExpandMoreIcon />
              </IconButton>
            </React.Fragment>
          ) : null}
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit={true}>
          <CardContent>
            <List>
              {childMessages.map((message: IMessage) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={
                        users.find((user: IUser) => user.id === message.author)
                          .imageUrl
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={message.message}
                    secondary={
                      users.find((user: IUser) => user.id === message.author)
                        .name
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(messageListCardStyles)(MessageListCard);
