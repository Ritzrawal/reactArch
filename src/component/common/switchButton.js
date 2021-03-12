import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap'
import {switchActive,switchInActive} from '../../store/action/loginAction'
import './button.css'
const buttontitle = [
	{
		name: 'One Way',
		value: 'One Way',
	},
	{
		name: 'Round Trip',
		value: 'Round Trip',
	},
]
const SwitchButtonComponent = (props) => {
	const [activeButton, setActiveButton] = useState(buttontitle[0].name)

	
	const onSideBtnClick = (e) => {		
		const name = e.target.name
		setActiveButton(name)
		if(name==='One Way'){
			props.switchInActive()
		}
		else{
			props.switchActive()
		}

          
	}
	return (
      
		<ButtonGroup className='OuterButtonGroup'>
			{buttontitle.map((it, i) => {
				const className =
					activeButton === it.name ? ' DisabledButtons' : 'SelectedButton'
				return (
					<Button
                    {...props}
						key={i}
						value={it.value}
						name={it.name}
						onClick={onSideBtnClick}
						className={` ${className}`}
					>
						{it.name}
					</Button>
				)
			})}
		</ButtonGroup>
	)
}

export default connect(null,{switchActive,switchInActive}) (SwitchButtonComponent)
