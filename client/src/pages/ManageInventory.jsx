import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentEditItem, setCurrentEditItem] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/inventory/get')
        .then(res => {
            setItems(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    const handleEditItem = (item) => {
        setCurrentEditItem(item);
        setShowEditModal(true);
    }

    const handleEditCurrentItem = () => {
        setShowEditModal(false);
    }

    return (
        <>
        <Container className='w-50 mt-5'>
            <Container className='justify-content-end'>
                <Button><i className='fa fa-plus'></i>Add Inventory</Button>
            </Container>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map((item, i) => {
                        return <tr key={i}>
                            <td>item.id</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>${item.price.$numberDecimal}</td>
                            <td>{item.category}</td>
                            <td>item.tags</td>
                            <td><Button onClick={() => { handleEditItem(item) }}>Edit</Button></td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </Container>
        <Modal show={showEditModal} onHide={() => { setShowEditModal(false) }}>
                <Modal.Dialog className='m-0'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Inventory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {
                        currentEditItem ? 
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type='text' value={currentEditItem.name}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control type='text' value={currentEditItem.description}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price ($):</Form.Label>
                                    <Form.Control type='number' value={currentEditItem.price.$numberDecimal}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Category:</Form.Label>
                                    <Form.Control type='text' value={currentEditItem.category}></Form.Control>
                                </Form.Group>
                            </Form> : <></>
                    }

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { setShowEditModal(false) }}>Close</Button>
                        <Button onClick={() => { handleEditCurrentItem(currentEditItem) }}>Submit</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default ManageInventory;