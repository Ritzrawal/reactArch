import React,{useState} from 'react'
//import ui library comaponent
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Collapse,
	NavbarText,
} from 'reactstrap'
import './headerPage.css'
import {withRouter} from 'react-router-dom'
const HeaderPage = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)


	const compareCurrentPath = (path) => {
		const currentPath = props.match.path
		if (currentPath === path) return true
		return false
	}
	return (
		<Navbar className='NavbarIcon' light expand='md'>
			<NavbarBrand className='HomevbarComponent' href='/'>
				<text className='HomebarTextComponent'>NepLove</text>
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>

			<Nav className='HeaderComponent' navbar>
				<div className='HeaderItemComponent'>
					<NavItem className='NavTextCustomize'>
						<NavLink
						className={`${
							compareCurrentPath('/hotel') ? 'active' : ''
						}`}
						href='/hotel'>
							<text className='HeaderTextCustomize'>Hotels</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink 
						className={`${
							compareCurrentPath('/flight') ? 'active' : ''
						}`}
						href='/flight'>
						
							<text className='HeaderTextCustomize'>Flights</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink  
						className={`${
							compareCurrentPath('/bus') ? 'active' : ''
						}`}
						href='/bus'>
							<text className='HeaderTextCustomize'> Bus</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink 
						className={`${
							compareCurrentPath('/travel') ? 'active' : ''
						}`}
						href='/travel'>
							<text className='HeaderTextCustomize'>Travel & Tours</text>
						</NavLink>
					</NavItem>
				</div>

				<NavItem className='SignupButtonContainer'>
					<NavLink href='/login'>
						<text className="HeaderTextHeader" >Login</text>
					</NavLink>
				</NavItem>
				<NavItem className='SignupButtonContainer'>
					<NavLink href='/signup'>
					<text  className="HeaderTextHeader">SignUp</text>
					</NavLink>
				</NavItem>
			</Nav>
			</Collapse>
		</Navbar>
	)
}
export default withRouter(HeaderPage)
