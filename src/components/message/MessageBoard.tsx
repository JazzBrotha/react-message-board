import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import IMessage from '../../models/message.model';
import MessageCard from './MessageCard';

const MessageBoard = ({
  messages,
  activeUser,
  users,
  deleteMessage,
  submitMessage,
  setMode,
  setActiveMessage
}) => (
  <Grid
    container={true}
    alignItems="center"
    justify="center"
    direction="column"
  >
    <Typography component="h1" variant="h5">
      Messages
    </Typography>
    {messages.length ? (
      <Grid container={true} spacing={16} style={{ padding: 16 }}>
        {messages.map((message: IMessage) => (
          <React.Fragment>
            {!message.parentId ? (
              <Grid item={true} key={message.id} xs={12} sm={6} md={3}>
                <MessageCard
                  setMode={setMode}
                  currentMessage={message}
                  messages={messages}
                  submitMessage={submitMessage}
                  deleteMessage={deleteMessage}
                  activeUser={activeUser}
                  users={users}
                  setActiveMessage={setActiveMessage}
                />
              </Grid>
            ) : null}
          </React.Fragment>
        ))}
      </Grid>
    ) : (
      <p>No messages posted.</p>
    )}
  </Grid>
);

export default MessageBoard;
