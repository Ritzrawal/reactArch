import React, { useState } from 'react'
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
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ButtonComponent, SwitchButtonComponent } from '../../component'
import {
	forgetPasswordAction,
	changePasswordAction,
} from '../../store/action/loginAction'

import './loginPage.css'
import '../../styles/responsive.css'
// import { title } from 'process'
// import colors from '../../utils/color'
const ForgetPassword = (props) => {
	const [error, serError] = useState(false)
	const [emailerror, setEmailError] = useState(false)
	const [form, setState] = useState({
		email: '',
	})
	const [passwordreset, setPassword] = useState({
		newpassword: '',
		resetpassword: '',
	})

	//get the token from Url browser url
	let location = useLocation()

	let query = new URLSearchParams(location.search) || ''
	let token = query.get('Authorization') || ''
	const onClickLogin = () => {
		// eslint-disable-next-line no-unused-expressions
		form.email.trim().length === 0
			? setEmailError(true)
			: (setEmailError(false), props.forgetPasswordAction(form.email))
	}

	const onClickLoginReset = () => {
		if (passwordreset.newpassword === passwordreset.resetpassword) {
			props.changePasswordAction(token, passwordreset.resetpassword)
		} else {
			setEmailError(true)
			serError(true)
		}
	}
	const onSubmit = (e) => {
		console.log('hekllo data ', e.target.value)
		e.preventDefault()
		setState({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	const onSubmitPassword = (e) => {
		console.log('hekllo data ', e.target.value)
		e.preventDefault()
		setPassword({
			...passwordreset,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<div className='LoginMainContainer'>
			<div className='MainContainer'>
				{!token ? (
					<Form className='LoginInnerMainContainer'>
						<div className='ButtonContainer'>
							<div className='TitleTextConatiner'>
								<text className='LoginTitleText'>NepLove</text>
							</div>
							{/* <div className='SignupLoginText'> */}
							<div className='LoginPasswordTextComponent'>
								<text className='LoginSignUpText'>Password Reset</text>
							</div>
						</div>

						{/* <FormGroup>
						<Label className='LoginLabelCustomizer'>OLD PASSWORD*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='password'
							name='password'
							value={form.email}
							id='password'
							placeholder='Enter your old passowrd'
						/>
					</FormGroup>
					<FormGroup>
						<Label className='LabelCustomizer'>NEW PASSWORD*</Label>
						<Input
							className='LoginFormGroupCustomize'
							type='password'
							name='password'
							value={form.email}
							id='password'
							placeholder='New Password'
						/>
					</FormGroup> */}
						<FormGroup>
							<Label className='LabelCustomizer'>EMAIL ADDRESS*</Label>
							<Input
								className='LoginFormGroupCustomize'
								type='text'
								name='email'
								onChange={onSubmit}
								invalid={emailerror}
								value={form.email}
								id='password'
								placeholder='Confirm Password'
							/>
							{emailerror && (
								<FormFeedback invalid className='ErrorTextMessage'>
									Email is required
								</FormFeedback>
							)}
							{props.passrror && (
								<text className='ErrorTextMessage'>{props.passrror}</text>
							)}
						</FormGroup>
						<div className='CreateProfileContainer'>
							<FormGroup className='logInBtn'>
								<ButtonComponent
									clickHandler={onClickLogin}
									title='Confirm'
									color='primary'
									height={50}
								/>
							</FormGroup>
						</div>
					</Form>
				) : (
					<Form className='LoginInnerMainContainer'>
						<div className='ButtonContainer'>
							<div className='TitleTextConatiner'>
								<text className='LoginTitleText'>WorkerPros</text>
							</div>
							{/* <div className='SignupLoginText'> */}
							<div className='LoginPasswordTextComponent'>
								<text className='LoginSignUpText'>Password Reset</text>
							</div>
						</div>

						<FormGroup>
							<Label className='LabelCustomizer'>NEW PASSWORD*</Label>
							<Input
								className='LoginFormGroupCustomize'
								type='password'
								name='newpassword'
								invalid
								// invalid={emailerror}
								onChange={onSubmitPassword}
								value={passwordreset.newpassword}
								id='newpassword'
								placeholder='New Password'
							/>
						</FormGroup>
						<FormGroup>
							<Label className='LabelCustomizer'>CONFIRM PASSWORD*</Label>
							<Input
								className='LoginFormGroupCustomize'
								type='password'
								name='resetpassword'
								invalid={emailerror}
								onChange={onSubmitPassword}
								value={passwordreset.resetpassword}
								id='resetpassword'
								placeholder='Confirm Password'
							/>
							{error && (
								<text className='ErrorTextMessage'>
									Enter the same Password as above
								</text>
							)}
						</FormGroup>
						<div className='CreateProfileContainer'>
							<FormGroup className='logInBtn'>
								<ButtonComponent
									clickHandler={onClickLoginReset}
									title='Confirm'
									color='primary'
									height={50}
								/>
							</FormGroup>
						</div>
					</Form>
				)}

				{/* </div> */}
			</div>
			{/* <div className='LoginRightHalfContainer'>
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
	passrror: state.loginReducer.passrror,
})
export default connect(mapStateToProps, {
	forgetPasswordAction,
	changePasswordAction,
})(ForgetPassword)
