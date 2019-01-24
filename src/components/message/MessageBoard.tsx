import * as React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
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
    <Typography component="h1" variant="h5" style={{ marginTop: 16 }}>
      Messages
    </Typography>
    {activeUser ? (
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: 16 }}
        onClick={() => setMode('Create')}
      >
        Create New Message
      </Button>
    ) : (
      <Typography component="p">
        Select a user in the toolbar to create, edit, delete, and comment
        messages.
      </Typography>
    )}
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
    ) : null}
  </Grid>
);

export default MessageBoard;
