import axios from 'axios'
import {HOTEL_INFO,HOTEL_DETAILS,HOTEL_SEARCH} from '../constant';
const baseUrl = 'http://admin.neplove.com/api/v1'

export const hotelSearchListAction = () => (dispatch) => {
	console.log('env', process.env)
	axios
		.get(`${baseUrl}/hotels`, {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				
			},
		})
		.then((res) => {
			dispatch({
				type: HOTEL_INFO,
				payload: res.data,
			})
		})

		.catch((error) =>
			dispatch({
				type: HOTEL_INFO,
				payload: error,
			})
		)
}
export const hotelRoomsDetailsAction = (hotel) => (dispatch) => {
	console.log("hello id",hotel)
	axios
		.get(`${baseUrl}/hotels/${hotel}`, {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				
			},
		})
		.then((res) => {
			dispatch({
				type: HOTEL_DETAILS,
				payload: res.data,
			})
		})

		.catch((error) =>
			dispatch({
				type: HOTEL_DETAILS,
				payload: error,
			})
		)
}

export const hotelSearchAction = (location, per_page) => (
	dispatch
) => {
	axios
		.post(`${baseUrl}/hotels/search`, {
			location: location,
			per_page: 30,	
		})
		.then((res) => {
			dispatch({
				type: HOTEL_SEARCH,
				payload: res,
			})
		})

		.catch((error) =>
			dispatch({
				type: HOTEL_SEARCH,
				payload: [],
			})
		)
}
