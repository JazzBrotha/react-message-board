import { CssBaseline, Paper } from '@material-ui/core';
import * as React from 'react';
import Message from './message/Message';
import TopBar from './top-bar/TopBar';

class App extends React.Component {
  public render() {
    return (
      <div>
        <CssBaseline />
        <TopBar />
        <Message />
      </div>
    );
  }
}

export default App;
