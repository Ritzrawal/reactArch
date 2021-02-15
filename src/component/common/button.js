import React from 'react'
import { Button } from 'reactstrap'
import './button.css'

const ButtonComponent = ({ buttonTitle, width, height }) => {
	return (
		<div>
			<Button
				style={{
					width: 100,
					height: 50,
					borderRadius: 50,
					backgroundColor: '#2EC2E2',
				}}
			>
				Search
			</Button>
		</div>
	)
}
export default ButtonComponent;
