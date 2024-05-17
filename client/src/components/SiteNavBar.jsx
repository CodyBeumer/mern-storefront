import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const SiteNavBar = () => {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    return (
    <Navbar className="bg-body-tertiary w-100 navbar navbar-expand navbar-light">
        <Container className='w-100 px-0'>
            <Navbar.Brand href='/' className='navbar-brand'>MERN Storefront</Navbar.Brand>
            <Nav>
                <Nav.Link href='/inventory'>Inventory</Nav.Link>
            </Nav>
            <Container className='d-flex justify-content-end'>
                {
                    isAuthenticated ?
                    <>
                        <NavDropdown title={user.name}>
                            <NavDropdown.Item href='/account-details'>Account Details</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { logout() }}>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </> :
                    <div>
                        <a onClick={() => { loginWithRedirect() }}>Sign In</a>
                        <span> | </span>
                        <a onClick={() => { loginWithRedirect() }}>Sign Up</a>
                    </div>
                }
                <div className='mx-3'>
                    <i className='fa fa-xl fa-cart-shopping'></i>
                    <div></div>
                </div>
            </Container>

        </Container>
    </Navbar>
    )
}

export default SiteNavBar