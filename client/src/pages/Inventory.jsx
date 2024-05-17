import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SiteNavBar from '../components/SiteNavBar';

const Inventory = ({ addItemToCart }) => {
    const [items, setItems] = useState([]);
    const [gridItems, setGridItems] = useState([]);
    const [displayType, setDisplayType] = useState('grid');

    const mapItemsToGrid = (data) => {
        const arr = [];
        const itemsCopy = data.slice();
        while (itemsCopy.length > 0) {
            const slicedArr = itemsCopy.splice(0, 3);
    
            while(slicedArr.length < 3) {
                slicedArr.push(null);
            }
            
            arr.push(slicedArr);
        } 
        return arr;
    }

    useEffect(() => {
        axios.get('http://localhost:5000/inventory/get')
        .then(res => {
            setItems(res.data);
            setGridItems(mapItemsToGrid(res.data))
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <Container className='mt-5'>
                {
                    gridItems.map((rowItems, i) => {
                        return (
                            <Row key={i}>
                            {
                                    rowItems.map((item, x) => {
                                        if (!item) {
                                            return (<Col key={x}></Col>)
                                        } else {
                                            return (<Col key={x}>
                                                <Card className='p-5 mb-3'>
                                                    <Card.Img className='mb-2' variant='top' src={item.image}></Card.Img>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Subtitle>${item.price.$numberDecimal}</Card.Subtitle>
                                                    <Card.Body>{item.description}</Card.Body>
                                                    <Button onClick={() => addItemToCart(item)}>Add To Cart</Button>
                                                </Card>
                                            </Col>)
                                        }
                                    })
                                }
                            </Row>
                        );
                    })
                }
        </Container>)
};

export default Inventory;