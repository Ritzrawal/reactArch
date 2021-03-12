import axios from 'axios';
import {LOGIN,LOGIN_ERROR,GOOGLE_LOGIN,FACE_LOGIN,SIGN_UP,SINGNUP_ERROR,
    FORGET_PASSWORD,PASSWORD_ERROR,NEW_PASSWORD,SWITCH_ACTIVE,SWITCH_INACTIVE} from '../constant';
const baseUrl = 'http://3.134.77.36/api/v1'

export const loginAction = (email, password) => (
	dispatch
) => {
	console.log('console action', email)
	axios
		.post(`${baseUrl}/login`, {
			email: email,
			password: password,
		})
		.then((res) => {
			console.log('signin', res)
			dispatch({
				type: LOGIN,
				payload: res,
			})
		})

		.catch((error) =>
			dispatch({
				type: LOGIN,
				payload: [],
			})
		)
}
export const googleLoginAction = (first_name,
    last_name,email,profile_id,profile_image,provider
	
) => (dispatch) => {
	console.log('google login form', profile_image)
	
	axios
		.post(`${baseUrl}/oauth-login`, {
			first_name: first_name,
			last_name: last_name,
			email:email,
			profile_id: profile_id,
			profile_image: profile_image,
			provider: provider,
		})
		.then((res) => {
			console.log('google login', res)
			dispatch({
				type: GOOGLE_LOGIN,
				payload: res,
			})
		})

		.catch((error) =>
		dispatch({
			type: GOOGLE_LOGIN,
			payload: error.response,
		})
	)
}
export const signupAction = (first_name,last_name,email,password,confirm_password
	
) => (dispatch) => {
	console.log('console signup action data', first_name)
	axios
		.post(`${baseUrl}/register`, {
			first_name: first_name,
			last_name: last_name,
			email: email,
			password: password,
			confirm_password: confirm_password,
			// password: password,
		})
		.then((res) => {
			console.log('signupres', res)
			dispatch({
				type: SIGN_UP,
				payload: res,
			})
		})

		.catch((error) =>
			dispatch({
				type: SINGNUP_ERROR,
				payload: [],
			})
		)
}
export const forgetPasswordAction = (email) => (dispatch) => {
	console.log('forget password ', email)
	axios
		.post(`${baseUrl}/password/email`, {
			email: email,
		})
		.then((res) => {
			console.log('forget password', res)
			dispatch({
				type: FORGET_PASSWORD,
				payload: res.data,
			})
		})

		.catch((error) =>
			dispatch({
				type: PASSWORD_ERROR,
				payload: error.response.data.message,
			})
		)
}
export const changePasswordAction = (authorization,password
	
) => (dispatch) => {
	console.log('change password details ', authorization, password)
	axios
		.post(`${baseUrl}/password/reset`, {
			authorization: authorization,
			password: password,
		})
		.then((res) => {
			console.log('forget password', res)
			dispatch({
				type: NEW_PASSWORD,
				payload: res.data,
				message: res.data.message,
			})
		})

		.catch((error) =>
			dispatch({
				type: NEW_PASSWORD,
				payload: error.response.data.message,
			})
		)
}
export const switchActive=() =>async(dispatch)=>{
    dispatch({
        type:SWITCH_ACTIVE
    })

}
export const switchInActive=() =>async(dispatch)=>{
    dispatch({
        type:SWITCH_INACTIVE
    })

}