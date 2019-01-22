import { CssBaseline, Paper } from '@material-ui/core';
import * as React from 'react';
import Message from './components/message/Message';
import TopBar from './components/top-bar/TopBar';
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <TopBar />
        <Message />
      </Provider>
    );
  }
}

export default App;
