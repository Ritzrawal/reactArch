/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	Row,
	FormFeedback,
} from 'reactstrap'
import FacebookLogin from 'react-facebook-login';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { History, LocationState } from 'history'
import { connect } from 'react-redux'
//import action for APi request
import { signupAction, googleLoginAction } from '../../store/action/loginAction'

//Component import
import { ButtonComponent, SwitchButtonComponent } from '../../component'

import './signupPage.css'
import '../../styles/responsive.css'
// import { title } from 'process'
// import colors from '../../utils/color'
const SignupPage = (props) => {
	const [show, setShow] = useState(false)
	const [error, serError] = useState(false)
	const [passerror, serPasError] = useState(false)
	const [firsterror, setFirstError] = useState(false)
	const [laserror, setLastError] = useState(false)
	const [form, setState] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirm_password: '',
	})

	useEffect(() => {
		if (props.signin || props.googlein.access_token) {
			props.history.push('/')
		} else {
			props.history.push('/signup')
		}
	}, [props.signin, props.googlein.access_token])
	const onClickSignup = () => {
		onLastNameError()
		onNameError()
		onEmailError()
		form.email.trim().length === 0 ? serError(true) : serError(false),
			props.signupAction(
				form.first_name,
				form.last_name,
				form.email,
				form.password,
				form.confirm_password
			)
	}
	const onEmailError = () => {
		form.password.trim().length === 0 ? serPasError(true) : serPasError(false),
			props.signupAction(
				form.first_name,
				form.last_name,
				form.email,
				form.password,
				form.role
			)
	}
	const onNameError = () => {
		form.first_name.trim().length === 0 && form.last_name.trim().length === 0
			? setFirstError(true)
			: setFirstError(false),
			props.signupAction(
				form.first_name,
				form.last_name,
				form.email,
				form.password,
				form.role
			)
	}
	const onLastNameError = () => {
		form.last_name.trim().length === 0
			? setLastError(true)
			: setLastError(false),
			props.signupAction(
				form.first_name,
				form.last_name,
				form.email,
				form.password,
				form.role
			)
	}

	const responseGoogle = (response) => {
		console.log('hello Signup', response)
		const profileObj = response.profileObj
		props.googleLoginAction(
			profileObj.givenName,
			profileObj.familyName,
			profileObj.email,
			profileObj.googleId,
			profileObj.imageUrl
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
	// props function for switch componnet
	const onDisplay = () => {
		console.log('signup', props)
		setShow(true)
	}

	return (
		<div className='SignupMainContainer'>
			<div className='MainContainer'>
				<Form className='InnerMainContainer'>
					<div className='SignupButtonContainer'>
						<div className='TitleTextConatiner'>
							<Link style={{ textDecoration: 'none' }} to='/'>
								<text className='TitleText'>NepLove</text>
							</Link>
						</div>
						{/* <div className='SignupLoginText'> */}
						<div className='LoginTextComponent'>
							<text className='SignUpText'>Sign Up</text>
						</div>
						<div className='GoogleButtonContainer'>
							<GoogleLogin
								className='LoginGoogleLoginButton'
								style={{ fontSize: 30, width: 70 }}
								// icon={false}
								clientId='737555203672-4n453vuqglt2lv26ce5fn2mgkpta51at.apps.googleusercontent.com'
								// buttonText='Sign up with Google'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
							>
								{/* <FontAwesome name='google' /> */}
								{/* <span className='LoginGoogleLoginButtonText'> {' '} Sign up with Google</span> */}
								<span className='LoginGoogleLoginButtonText'>
									{' '}
									Sign up with Google
								</span>
							</GoogleLogin>
                          
							
						</div>
                        <div className='GoogleButtonContainer'>
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
				 
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label className='LabelCustomizer'>FIRST NAME*</Label>
									<Input
										className='LoginFormGroupCustomize'
										type='text'
										invalid={firsterror}
										name='first_name'
										id='exampleEmail'
										onChange={onSubmit}
										placeholder='Your First Name'
									/>
									{firsterror && (
										<FormFeedback invalid className='ErrorTextMessage'>
											First name is required
										</FormFeedback>
									)}
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label className='LabelCustomizer'>LAST NAME*</Label>
									<Input
										className='LoginFormGroupCustomize'
										type='text'
										invalid={laserror}
										name='last_name'
										onChange={onSubmit}
										id='examplePassword'
										placeholder='Your Last Name'
									/>
									{laserror && (
										<FormFeedback invalid className='ErrorTextMessage'>
											Last name required
										</FormFeedback>
									)}
								</FormGroup>
							</Col>
						</Row>
					

					<FormGroup>
						<Label className='LabelCustomizer'>EMAIL*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='email'
							name='email'
							invalid={error}
							onChange={onSubmit}
							id='email'
							placeholder='Your Email'
						/>
						{error ? (
							<FormFeedback invalid className='ErrorTextMessage'>
								Email is required
							</FormFeedback>
						) : props.message.email ? (
							<text className='ErrorTextMessage'>{props.message.email}</text>
						) : (
							<text className='ErrorTextMessage'>{props.message.email}</text>
						)}
					</FormGroup>
					<FormGroup>
						<Label className='LabelCustomizer'>PASSWORD*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='password'
							name='password'
							invalid={passerror}
							onChange={onSubmit}
							id='password'
							placeholder='Your Password'
						/>
						{passerror ? (
							<FormFeedback invalid className='ErrorTextMessage'>
								Password is required
							</FormFeedback>
						) : props.message.password ? (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						) : (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						)}
					</FormGroup>
					<FormGroup>
						<Label className='LabelCustomizer'>CONFIRM PASSWORD*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='password'
							name='confirm_password'
							invalid={passerror}
							onChange={onSubmit}
							id='password'
							placeholder='Confirm Password'
						/>
						{passerror ? (
							<FormFeedback invalid className='ErrorTextMessage'>
								Password is required
							</FormFeedback>
						) : props.message.password ? (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						) : (
							<text className='ErrorTextMessage'>{props.message.password}</text>
						)}
					</FormGroup>
					<FormGroup check className='ChecBoxContainer'>
						<Label check>
							<Input className='CheckBoxCustomize' type='checkbox' />
							<p className='CheckBoxText'>
								By creating a new account you agree
								<br />
								to the <span className='CheckBoxText_blue'> terms of use</span>
							</p>
						</Label>
					</FormGroup>
					<div className='CreateProfileContainer'>
						<FormGroup className='logInBtn'>
							<ButtonComponent
								clickHandler={onClickSignup}
								title='Sign Up'
								color='primary'
								width={342}
								height={50}
							/>
						</FormGroup>
						<FormGroup className='loginOptions'>
							<div>
								<text>Already have an account ?</text>

								<Link to='/login'>
									<text>Log In</text>
								</Link>
							</div>
						</FormGroup>
					</div>
				</Form>
			</div>
			{/* <div className='LoginRightHalfContainer'>
				<div className='RightHalfButton'>
					<SwitchButtonComponent buttonTitle='Hello data' onClick={onDisplay} />
				</div>
				<div className='signup-para'>
					<p>IT&apos;S EASY WITH US</p>
					<h1>
						Build Your Future <br />
						with WorkerPros
					</h1>
					<p>
						Join the largest community of skilled <br />
						construction workers looking for new <br />
						career opportunities
					</p>
				</div>
				<img src={signupImage}></img>
			</div> */}
		</div>
	)
}
const mapStateToProps = (state) => ({
	signupdata: state.loginReducer.signup,
	message: state.loginReducer.signerror,
	signin: state.loginReducer.signin,
	googlein: state.loginReducer.googledata,
	visible: state.loginReducer.visible,
})
export default connect(mapStateToProps, { signupAction, googleLoginAction })(
	SignupPage
)
