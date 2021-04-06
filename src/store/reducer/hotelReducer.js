import {HOTEL_INFO,HOTEL_DETAILS,HOTEL_SEARCH} from '../constant'
const initialstate={
    data:[],
    hoteldetails:[],
    search:[],
}
const hotelReducer = (state = initialstate, action) => {
    switch (action.type) {
    case HOTEL_INFO:
        return {
            ...state,
            
            data: action.payload.results,
        }
        case HOTEL_DETAILS:
        return {
            ...state,
            
            hoteldetails: action.payload,
        }
        case HOTEL_SEARCH:
            return {
                ...state,
                
                search: action.payload.data,
            }
        default:
            return state;
        }
    };
    export default hotelReducer