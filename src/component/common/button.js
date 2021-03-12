import React,{useState} from 'react'
import './button.css'
import { useHistory } from "react-router-dom";	
import { Button, ButtonGroup } from 'reactstrap'
const buttontitle = [
	{
		name: 'Hotel',
		value: 'Hotel',
	},
	{
		name: 'Flight',
		value: 'Flight',
	},
	{
		name: 'Bus',
		value: 'Bus',
	},
	{
		name: 'Tours & Travel',
		value: 'Tours & Travel',
	},
]
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
const HeaderButtonComponent = (props) => {
	const [activeButton, setActiveButton] = useState(buttontitle[0].name)
	let history = useHistory();
	const onSideBtnClick = (e) => {	
		console.log("state value",activeButton)	
		const name = e.target.name
		console.log("target",name)	
		setActiveButton(name)
		// if(name==='Hotel'){
		// 	history.push("/hotel");
		// }
		//  if(name==='Flight'){
		// 	history.push("/flight");
		// }
		// else if(name==='Bus'){

		// 	history.push("/bus");
		// }
		// else{
		// 	history.push("/travel");

		// }

          
	}
	return (
      
		<ButtonGroup className='OuterButtonGroupHome'>
			{buttontitle.map((it, i) => {
				const className =
					activeButton === it.value ? ' ButtonClass' : 'ButtonClassActive'
					console.log('classname',className)
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
export default ButtonComponent;
export {HeaderButtonComponent,ButtonComponent}
