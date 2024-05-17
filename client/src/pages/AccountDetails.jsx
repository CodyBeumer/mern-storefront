import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image';

const AccountDetails = () => {
    const [input, setInput] = useState();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const handleInputChange = (e) => {
        input[e.target.name] = e.target.value;
        setInput(input);
    }

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    return (
        <Container className='w-50 mt-5'>
            {
                isAuthenticated ? 
                <Form>
                    <Form.Group className=' d-grid mb-3'>
                        <Form.Label>Profile Picture:</Form.Label>
                        <Image src={user.picture} roundedCircle></Image>
                    </Form.Group>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' name='name' value={user.name} onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' name='email' value={user.email} onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Birth Date:</Form.Label>
                        <Form.Control type='date' name='birthdate' value={user.birthdate} onChange={handleInputChange}></Form.Control>
                    </Form.Group>
                </Form> : <></>
            }
        </Container>
    )
}

export default AccountDetails;