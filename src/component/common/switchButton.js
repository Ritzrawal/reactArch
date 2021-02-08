import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
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
	const [selected, setSelected] = useState(false)
	const [selectedtwo, setSelectedtwo] = useState(false)
	const [activeButton, setActiveButton] = useState(buttontitle[0].name)

	const toggleSelected = () => {
		setSelected(!selected)
	}
	const toggleSelectedtwo = () => {
		setSelectedtwo(!selectedtwo)
	}
	const onSideBtnClick = (e) => {
        console.log("hello" ,props)
        props.onClickSwitch(e)
		const name = e.target.name
		setActiveButton(name)
          
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

export default SwitchButtonComponent
