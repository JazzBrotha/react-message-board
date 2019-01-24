import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@material-ui/core';
import MessageContainer from './components/message/MessageContainer';
import TopBar from './components/top-bar/TopBar';
import UserContainer from './components/user/UserContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <TopBar />
        <UserContainer />
        <MessageContainer />
      </Provider>
    );
  }
}

export default App;
