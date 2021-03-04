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
const HeaderPage = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)
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
						<NavLink href='/hotel/search'>
							<text className='HeaderTextCustomize'>Hotels</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink href='/flight'>
							<text className='HeaderTextCustomize'>Flights</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink href='/bus'>
							<text className='HeaderTextCustomize'> Bus</text>
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
export default HeaderPage
