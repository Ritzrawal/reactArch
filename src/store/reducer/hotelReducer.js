import {HOTEL_INFO} from '../constant'
const initialstate={
    data:[]
}
const hotelReducer = (state = initialstate, action) => {
    switch (action.type) {
    case HOTEL_INFO:
        return {
            ...state,
            loadings: true,
            data: action.payload.results,
        }
        default:
            return state;
        }
    };
    export default hotelReducer