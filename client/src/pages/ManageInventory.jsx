import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const ManageInventory = () => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        price: 0,
        category: '',
        quantity: 0,
        tags: []
    });

    const handleInputChange = (e) => {
        input[e.target.name] = e.target.value;        
        setInput(input);
    }

    const handleSubmit = () => {
        axios.put('http://localhost:5000/inventory/put', {
            name: input.name,
            description: input.description,
            price: input.price,
            category: input.category,
            quantity: input.quantity,
            tags: input.tags
        })
        .then(() => {
            setInput({
                name: "",
                description: "",
                price: 0,
                category: "",
                quantity: 0,
                tags: []
            })
        })
        .catch(err => console.log)
    }

    return (  
        <Container className='w-50'>
            <Container className='d-flex justify-content-end mt-5 mb-5'>
                <Button className='justify-ccontent-end' onClick={handleSubmit}><i className='fa fa-plus'></i> Add Inventory</Button>
            </Container>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' name='name' onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type='text' name='description' onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type='number' name='price' onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control type='text' name='category' onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type='number' name='quantity' onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Tags:</Form.Label>
                    <Form.Control type='text' name='tags' onChange={handleInputChange}></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ManageInventory;