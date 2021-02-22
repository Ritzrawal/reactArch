/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	FormFeedback,
	Col,
	Row,
} from 'reactstrap'
import { connect } from 'react-redux'
import { History } from 'history'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
	Switch,
} from 'react-router-dom'
import { ButtonComponent, SwitchButtonComponent } from '../../component'
import { loginAction, googleLoginAction } from '../../store/action/loginAction'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

import './loginPage.css'
import '../../styles/responsive.css'
///defining the interfance for typescript

const LoginPage = (props) => {
	const [error, serError] = useState(false)
	const [passerror, serPasError] = useState(false)
	const [form, setState] = useState({
		email: '',
		password: '',
	})
	useEffect(() => {
		if (props.logindata.results || props.googlein.access_token) {
			props.history.push('/')
		} else {
			props.history.push('/login')
		}
	}, [props.logindata.results])
	const onClickLogin = () => {
		onEmailError()
		{
			form.email.trim().length === 0
				? serError(true)
				: (serError(false), props.loginAction(form.email, form.password))
		}
	}
	const onEmailError = () => {
		form.password.trim().length === 0
			? serPasError(true)
			: (serPasError(false), props.loginAction(form.email, form.password))
	}
	const responseGoogle = (response) => {
		console.log('hello login', response)
		props.googleLoginAction(
			response.profileObj.givenName,
			response.profileObj.familyName,
			response.profileObj.email,
			response.profileObj.googleId,
			response.profileObj.imageUrl
		)
	}
	const responseFacebook = (response) => {
		console.log(response);
	  }
	const onSubmit = (e) => {
		console.log('hekllo data ', e.target.value)
		e.preventDefault()
		setState({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<div className='LoginMainContainer'>
			<div className='MainContainer'>
				<Form className='LoginInnerMainContainer'>
					<div className='LoginButtonContainer'>
						<div className='LoginTitleTextConatiner'>
							<Link style={{ textDecoration: 'none' }} to='/'>
								<text className='LoginTitleText'>NepLove</text>
							</Link>
						</div>
						<div className='LoginTextComponent'>
							<text className='LoginSignUpText'>Log In</text>
						</div>
						<div className='LoginGoogleButtonContainer'>
							<GoogleLogin
								className='LoginGoogleLoginButton'
								style={{ fontSize: 30, width: 70 }}
								clientId='737555203672-4n453vuqglt2lv26ce5fn2mgkpta51at.apps.googleusercontent.com'
								onSuccess={responseGoogle}
								// onFailure={responseGoogle}
							>
								<span className='LoginGoogleLoginButtonText'>
									{' '}
									Login with Google
								</span>
							</GoogleLogin>
						</div>
						<div className='LoginGoogleButtonContainer'>
						<FacebookLogin
                       appId="119231286717379"
	                 fields="name,email,picture"
	                 callback={responseFacebook}
	                 cssClass="my-facebook-button-class"
	                icon="fa-facebook" />,
						</div>
					</div>
					<div className='LoginDivideLine'>
						<div className='LoginLeftHalfDivider'></div>
						<text className='LoginDividerText'>OR</text>
						<div className='LoginRightHalfDivider'></div>
					</div>
					<FormGroup>
						<Label className='LoginLabelCustomizer'>EMAIL*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='email'
							name='email'
							invalid={error}
							onChange={onSubmit}
							value={form.email}
							id='email'
							placeholder='Your Email'
						/>
						{/* {error ? (
							<FormFeedback invalid className='ErrorTextMessage'>
								Email is required
							</FormFeedback>
						) : props.message.email ? (
							<text className='ErrorTextMessage'>{props.message.email}</text>
						) : (
							<text className='ErrorTextMessage'>{props.message.email}</text>
						)} */}
					</FormGroup>
					<FormGroup>
						<Label className='LoginLabelCustomizer'>PASSWORD*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='password'
							name='password'
							invalid={passerror}
							value={form.password}
							onChange={onSubmit}
							id='password'
							placeholder='Your Password'
						/>
						{/* {passerror ? (
							<FormFeedback invalid className='ErrorTextMessage'>
								Password is required
							</FormFeedback>
						) : props.message.password ? (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						) : (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						)}
						 */}
					</FormGroup>
					<FormGroup check className='LoginChecBoxContainer'>
						<Label className='CustomCheckBox' check>
							<Input className='LoginCheckBoxCustomize' type='checkbox' />
							<text className='LoginCheckBoxText'>Keep me logged in</text>
							<span className='checkmark'></span>
						</Label>
					</FormGroup>
					<div className='LoginCreateProfileContainer'>
						<FormGroup className='logInBtn'>
							<ButtonComponent
								clickHandler={onClickLogin}
								title='Log In'
								color='primary'
								height={50}
							/>
						</FormGroup>
						<div className='loginOptions'>
							<div className='signUp'>
								<text>Dont have an account? </text>
								<Link to='/signup'>
									<text> Sign Up</text>
								</Link>
							</div>
							<div className='forgotPassword'>
								<Link to='/change-password'>
									<text> Forget password?</text>
								</Link>
							</div>
						</div>
					</div>
				</Form>
				
			</div>
		</div>
	)
}
const mapStateToProps = (state) => ({
	logindata: state.loginReducer.data,
	loggedin: state.loginReducer.loggedin,
	googlein: state.loginReducer.googledata,
	message: state.loginReducer.error,
})
export default connect(mapStateToProps, { loginAction, googleLoginAction })(
	LoginPage
)