import axios from 'axios'
import {HOTEL_INFO} from '../constant';
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
