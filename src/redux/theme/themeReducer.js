import actionTypes from '../actionTypes';

const initialState = {
  currentTheme: 'light',
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      if (state.currentTheme === 'light') {
        return { currentTheme: 'dark' };
      } else return { currentTheme: 'light' };

    default:
      return state;
  }
}

export default themeReducer;
