import React,{useState} from 'react'
import './button.css'
import { useHistory } from "react-router-dom";	
import { Button, ButtonGroup } from 'reactstrap'
const buttontitle = [
	{
		name: 'Hotel',
		value: '1',
	},
	{
		name: 'Flight',
		value: '2',
	},
	{
		name: 'Bus',
		value: '3',
	},
	{
		name: 'Tours & Travel',
		value: '4',
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
	const [activeButton, setActiveButton] = useState(buttontitle[props.id].name)
	let history = useHistory();
	const  onSideBtnClick =async (e) => {	
		console.log("state value",activeButton)	
		const name = e.target.name
		console.log("target",props.id)	
		if(e.target.id==1){
			history.push("/hotel");
		}
		else if(e.target.id==2){
			history.push("/flight");
		}
		else if(e.target.id==3){

			history.push("/bus");
		}
		else{
			history.push("/travel");

		}
		await setActiveButton(name)

          
	}
	return (
      
		<ButtonGroup className='OuterButtonGroupHome'>
			{buttontitle.map((it, i) => {
				const className =
					activeButton === it.name ? ' ButtonClassActive ' : 'ButtonClass'
					console.log('classname',className)
				return (
					<Button
                    {...props}
						key={i}
						id={it.value}
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
