import React from 'react'
import { Button } from 'reactstrap'
import './button.css'

const ButtonComponent = ({ buttonTitle, width, title,clickHandler }) => {
	return (
		<div>
			<Button
			onClick={clickHandler}
				style={{
					width: "100%",
					height: 50,
					borderRadius: 50,
					backgroundColor: '#2EC2E2',
				}}
			>
				{title}
			</Button>
		</div>
	)
}
export default ButtonComponent;
