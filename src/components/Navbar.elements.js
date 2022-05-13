import styled from 'styled-components';

export const NavbarContainer = styled.div `
width: 100%;
height: 70px;
position: sticky;
top: 0;
z-index: 99;
background-color: pink;

`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 95%;
max-width: 1000px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: left;

`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
align-items: center;
font-family: "Roboto";
font-size: 1.2rem;
color: black;
`;

export const Menu = styled.ul `
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 960px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 88px;
    left: ${({click}) => click ? 0: "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: pink;
}
`;

export const MenuItem  = styled.li `
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
align-items: center;
justify-content: right;
font-size: 1.2rem;
font-family: "Roboto";
font-weight: 400;

&: hover{
background-color: black;
border-bottom: 0.3rem solid pink;
transition: 0.4s ease-in;
}
@media screen and (max-width: 960px){
    width: 100%;
    height: 70px;
}
`;

export const MenuItemLink = styled.a  `
text-decoration: none;
color: blue;

`;

export const IconLogoMobile = styled.div `
display: none;

@media screen and (max-width: 960px){
    display: flex;
    color: blue;
    font-size: 2rem;
}
`;
