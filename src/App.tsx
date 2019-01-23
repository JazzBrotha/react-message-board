import { CssBaseline, Paper } from '@material-ui/core';
import * as React from 'react';
import MessageBoard from './components/message-board/MessageBoard';
import TopBar from './components/top-bar/TopBar';
import UserDialog from './components/user-dialog/UserDialog';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <TopBar />
        <MessageBoard />
      </Provider>
    );
  }
}

export default App;
