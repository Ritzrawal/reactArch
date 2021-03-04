
import React from 'react'
import './button.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const InputCheckBox = (props) => {
	return (
		<FormGroup check className='GlobalChecBoxContainer'>
			<Label className='GlobalCustomCheckBox' check>
				<Input
					className='GlobalCheckBoxCustomize'
					type='checkbox'
					value={props.title}
					onChange={props.onChecked}
				/>
				<p className='GlobalCheckBoxText'>{props.title}</p>
				<span className='Globalcheckmark'></span>
			</Label>
		</FormGroup>
	)
}
export default InputCheckBox
