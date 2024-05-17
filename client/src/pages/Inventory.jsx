import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const items = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhKWHWd7ugKuKWvovXiyHMYce77dw98Fan7On7IQarNS-AGHkVkMZNBz9hsNClanpeyM&usqp=CAU",
        name: "Men's Shirt",
        description: '',
        price: 25.99,
        quantity: 30
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhKWHWd7ugKuKWvovXiyHMYce77dw98Fan7On7IQarNS-AGHkVkMZNBz9hsNClanpeyM&usqp=CAU",
        name: "Men's Shirt",
        description: '',
        price: 26.99,
        quantity: 30
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhKWHWd7ugKuKWvovXiyHMYce77dw98Fan7On7IQarNS-AGHkVkMZNBz9hsNClanpeyM&usqp=CAU",
        name: "Men's Shirt",
        description: '',
        price: 22.99,
        quantity: 30
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhKWHWd7ugKuKWvovXiyHMYce77dw98Fan7On7IQarNS-AGHkVkMZNBz9hsNClanpeyM&usqp=CAU",
        name: "Men's Shirt",
        description: '',
        price: 23.99,
        quantity: 30
    }
]

const mapItemsToGrid = () => {
    const arr = [];
    const itemsCopy = [...items];
    while (itemsCopy.length > 0) {
        const slicedArr = itemsCopy.splice(0, 3);

        while(slicedArr.length < 3) {
            slicedArr.push(null);
        }
        
        arr.push(slicedArr);
    } 
    return arr;
}

const gridItems = mapItemsToGrid(items);

const Inventory = () => {
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
                                                    <Card.Subtitle>${item.price}</Card.Subtitle>
                                                    <Card.Body>{item.decription}</Card.Body>
                                                    <Button>Add To Cart</Button>
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