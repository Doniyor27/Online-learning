import { HeaderWrapper, NavBar, BurgerMenu, NavLinks } from './style'
import Logo from '../../../src/assets/icons/logo.svg'
import Button from '../../components/button'
import { useHistory } from "react-router-dom"


import { Container, Nav, Navbar, Offcanvas, } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import { colors } from '../../assets/styles/colors'

export default function Header() {
    const history = useHistory()
    return (
        <HeaderWrapper>
            <div className="headerInner container">
                <div className="headerLogo" onClick={() => history.push('/')}>
                    <img src={Logo} alt="logo-img" className="logo" />
                </div>

                <NavBar className="navBar">
                    <NavLinks className="navLinks">
                        <li className="navLink" onClick={() => history.push('/')}>Home</li>
                        <li className="navLink" onClick={() => history.push('/careers')}>Careers</li>
                        <li className="navLink" onClick={() => history.push('/blog')}>Blog</li>
                        <li className="navLink" onClick={() => history.push('/about')}>About Us</li>
                    </NavLinks>

                    <div className="authBtns">
                        <Button
                            name={"Login"}
                            className="login"
                            propsColor={colors.textBlack}
                            propsBackGround={colors.white}
                            borderColor={"transparent"}
                            borderWeight={0}
                            opacity={0.7}
                            boxShadow={"0px 20px 24px rgba(0, 0, 0, 0.03)"}
                            onClick={() => history.push('/auth')}
                        />

                        <Button
                            name={"Sign Up"}
                            className="SignUp"
                            propsColor={colors.white}
                            propsBackGround={colors.orange}
                            borderColor={"transparent"}
                            borderWeight={0}
                            opacity={0.7}
                            onClick={() => history.push('/auth')}
                        />
                    </div>
                </NavBar>

                <BurgerMenu bg="background-color" expand={false}>
                    <Container fluid={true}>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                    
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLinks className="navLinks">
                                    <li className="navLink" onClick={() => history.push('/')}>Home</li>
                                    <li className="navLink" onClick={() => history.push('/careers')}>Careers</li>
                                    <li className="navLink" onClick={() => history.push('/blog')}>Blog</li>
                                    <li className="navLink" onClick={() => history.push('/about')}>About Us</li>
                                </NavLinks>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </BurgerMenu>
            </div>
        </HeaderWrapper>
    )
}