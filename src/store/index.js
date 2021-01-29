//import library for store config 
// import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducer/rootReducer';

// Imports: Redux
// Middleware: Redux Persist Config

// Middleware: Redux Persist Persisted Reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const allMiddlewares = [thunk, createLogger()];
// Redux: Store
const store = createStore(rootReducer,applyMiddleware(...allMiddlewares),
);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);
// Exports
export {store};
