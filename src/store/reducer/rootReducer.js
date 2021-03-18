// Imports: Dependencies
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import hotelReducer from './hotelReducer'


// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  hotelReducer:hotelReducer,



});
// Exports
export default rootReducer;
