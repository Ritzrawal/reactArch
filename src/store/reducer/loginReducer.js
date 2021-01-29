const initialstate = {
    data: [],
    id: [],
    cateogry: [],
    drawer: [],
    newdrawer: [],
    loadings: false,
};
import {LOGIN} from '../constant';
const loginReducer = (state = initialstate, action) => {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            loadings: true,
            data: action.payload.data,
        };
    default:
        return state;
    }
};
export default loginReducer;
  