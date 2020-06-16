import React from "react";
import "../App.css"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
    Jumbotron
}
from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {

    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            
            <h1 className="cartC">Shopping Cart</h1>
            
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img
                            height={80}
                            src={item.tinyImage}
                            />
                            </Col>
                            <Col className="text-center">
                              <div className="text-warning">
                                  {item.productName}
                              </div>
                              <span>Price: $ {item.productPrice}</span>
                              <Button color="danger" onClick={() => removeItem(item)}>Remove Item</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                ))}
            </ListGroup>
            {/* //If everything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your Total for {cartItem.length} items is ${amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="warning" onClick={buyNow}>
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <div className="emptyCart">
                    <h1> Cart is Empty</h1>
                    </div>
                )
            }

        </Container>
    )


}

export default Cart;