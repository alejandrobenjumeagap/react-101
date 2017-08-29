import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';

import styles from './App.css';
import Card from './components/Card/Card';
import Header from './components/Card/Header';
import Main from './components/Card/Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      isLoading: true,
    })
    setTimeout(() =>{
      this.setState({
        isLoading: false,
      })
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <Card
            center
            isLoading={isLoading}
          >
            <Header>
              Login
            </Header>
            <Main>
              <RaisedButton
                label="Submit"
                primary
                onClick={this.handleSubmit}
                fullWidth
              />
            </Main>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
