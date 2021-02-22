import {LOGIN,SWITCH_ACTIVE,SWITCH_INACTIVE,LOGIN_DATA,
	LOGIN_ERROR,
	SIGN_UP,
	SINGNUP_ERROR,
	GOOGLE_LOGIN,
	GOOGLE_ERROR,
	FORGET_PASSWORD,
	PASSWORD_ERROR,
} from '../constant';
const initialstate = {
    data: [],
   
	googledata: [],
	password: [],
	passrror: '',
	visible: false,
	error: '',
	signerror: '',
	signup: [],
	token: '',
	signin: false,
	loggedin: false,
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
        case LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case SIGN_UP:
			return {
				...state,
				signup: action.payload.data,
				signin: action.payload.status,
			}
		case SINGNUP_ERROR:
			return {
				...state,
				signerror: action.payload,
			}
		case GOOGLE_LOGIN:
			return {
				...state,
				googledata: action.payload.data,
				// signin: action.payload.status,
			}
		case GOOGLE_ERROR:
			return {
				...state,
				signerror: action.payload,
			}
		case FORGET_PASSWORD:
			return {
				...state,
				password: action.payload.data,
				passrror: action.payload.message,
			}
		case PASSWORD_ERROR:
			return {
				...state,
				passrror: action.payload,
			}

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
  