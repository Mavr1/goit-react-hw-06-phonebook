import React, { Component } from 'react';

const Context = React.createContext();

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  state = {
    currentTheme: 'light',
    toggleTheme: this.onToggleTheme.bind(this),
  };

  onToggleTheme(newTheme) {
    this.setState({
      currentTheme: newTheme ? 'light' : 'dark',
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;
