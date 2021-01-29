// Imports: Dependencies
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';


// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
  loginReducer: loginReducer,



});
// Exports
export default rootReducer;
