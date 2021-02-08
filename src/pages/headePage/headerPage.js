import React from 'react'
//import ui library comaponent
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from 'reactstrap'
import './headerPage.css'
const HeaderPage = () => {
	return (
		<Navbar className='NavbarIcon' light expand='md'>
			<NavbarBrand className='HomevbarComponent' href='/'>
				<text className='HomebarTextComponent'>NepLove</text>
			</NavbarBrand>
			<NavbarToggler />

			<Nav className='HeaderComponent' navbar>
				<div className='HeaderItemComponent'>
					<NavItem className='NavTextCustomize'>
						<NavLink href='/components/'>
							<text className='HeaderTextCustomize'>Hotels</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink href='/components/'>
							<text className='HeaderTextCustomize'>Flights</text>
						</NavLink>
					</NavItem>
					<NavItem className='NavTextCustomize'>
						<NavLink href='/components/'>
							<text className='HeaderTextCustomize'> Bus</text>
						</NavLink>
					</NavItem>
				</div>

				<NavItem>
					<NavLink href='/login'>
						<text className="HeaderText" >Login</text>
					</NavLink>
				</NavItem>
				<NavItem className='SignupButtonContainer'>
					<NavLink href='/signup'>
					<text  className="HeaderText">SignUp</text>
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	)
}
export default HeaderPage
