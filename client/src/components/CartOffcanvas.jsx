import Offcanvas from 'react-bootstrap/Offcanvas';

const CartOffcanvas = ({ cartItems, cartVisible, setCartVisible }) => {
    return (
        <>
        <Offcanvas show={cartVisible} placement='end'>
            <Offcanvas.Header closeButton onHide={() => { setCartVisible(false) }}>
                <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                    <ul>
                        {
                            cartItems.map((item, i) => {
                                return <li key={i}>{item.name}</li>
                            })
                        }
                    </ul>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default CartOffcanvas;