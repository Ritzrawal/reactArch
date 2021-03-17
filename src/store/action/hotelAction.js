import axios from 'axios'
import {HOTEL_INFO} from '../constant';
const baseUrl = 'http://admin.neplove.com/api/v1'

export const profileAllInfoAction = () => (dispatch) => {
	console.log('env', process.env)
	axios
		.get(`${baseUrl}/worker/profile-info`, {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				
			},
		})
		.then((res) => {
			console.log('profil all info', res)
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
