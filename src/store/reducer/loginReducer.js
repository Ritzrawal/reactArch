import {LOGIN,SWITCH_ACTIVE,SWITCH_INACTIVE} from '../constant';
const initialstate = {
    data: [],
    visible:false,
    id: [],
    cateogry: [],
    drawer: [],
    newdrawer: [],
    loadings: false,
};

const loginReducer = (state = initialstate, action) => {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            loadings: true,
            data: action.payload.data,
        };
        case SWITCH_ACTIVE:
            return {
                ...state,
                visible: true,
            };
            case SWITCH_INACTIVE:
            return {
                ...state,
                visible: false,
            };
    default:
        return state;
    }
};
export default loginReducer;
  