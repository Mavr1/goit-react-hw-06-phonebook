import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

persistStore(store);
