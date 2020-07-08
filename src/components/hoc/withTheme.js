import React from 'react';
import ThemeContext from '../../context/ThemeContext';

const withTheme = (WrappedComponent) => {
  return function withTheme(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          return <WrappedComponent {...props} themeC={context} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
