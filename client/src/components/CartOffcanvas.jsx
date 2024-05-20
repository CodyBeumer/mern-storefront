import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CartOffcanvas = ({ cartItems, cartVisible, setCartVisible }) => {
    return (
        <>
        <Offcanvas show={cartVisible} placement='end'>
            <Offcanvas.Header closeButton onHide={() => { setCartVisible(false) }}>
                <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                    <Container>
                        {
                            cartItems.map((item, i) => {
                                return (
                                <Card key={i} className='p-5 mb-3'>
                                    <Card.Img></Card.Img>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Subtitle>${item.price.$numberDecimal}</Card.Subtitle>
                                    <Card.Body>{item.description}</Card.Body>
                                    <Button>Remove From Cart</Button>
                                </Card>
                                )
                            })
                        }
                    </Container>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default CartOffcanvas;