import actionTypes from '../actionTypes';

const initialState = {
  list: [],
  filter: '',
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        list: [...state.list, action.payload.contact],
      };

    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.FILTER_CONTACTS:
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
}

export default contactReducer;
