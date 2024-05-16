import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';

const SiteNavBar = () => {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    return (
    <Navbar className="bg-body-tertiary w-100">
        <Container className='w-100 px-0'>
            <Navbar.Brand href="#home">MERN Storefront</Navbar.Brand>
            {
                isAuthenticated ?
                <NavDropdown title={user.name}>
                    <NavDropdown.Item href='#account-details'>Account Details</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { logout() }}>Sign Out</NavDropdown.Item>
                </NavDropdown> :
                <a onClick={() => { loginWithRedirect() }}>Sign In</a>
            }
        </Container>
    </Navbar>
    )
}

export default SiteNavBar