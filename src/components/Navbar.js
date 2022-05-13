import React, {useState} from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.elements'
import { BsBagCheckFill } from "react-icons/bs";
import { FaBars , FaTimes} from "react-icons/fa";




const Navbar = () => {
   const [click, setClick] = useState(false);

   const ChangeClick = () => {
     setClick(!click);
   };
  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>
            <BsBagCheckFill size={"2em"}/>
            <IconLogo> Mi Ecommerce</IconLogo>

            <IconLogoMobile onClick={() => ChangeClick()}>
             {click ? <FaTimes /> : <FaBars />}
            </IconLogoMobile>

            <Menu click={click}>
                <MenuItem onClick={() => ChangeClick()}>
                <MenuItemLink>Home</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={() => ChangeClick()}>
                <MenuItemLink>Services</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={() => ChangeClick()}>
                <MenuItemLink>About</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={() => ChangeClick()}>
                <MenuItemLink>Contact</MenuItemLink>
                </MenuItem>
            </Menu>
        </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}

export default Navbar
