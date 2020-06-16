import React from "react";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";

const MyCard = ({product, addInCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg
            top
            height="175"
            width="100%"
            src={product.smallImage}
            alt={""}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary"> Price: ${product.productPrice}</CardText>
                <Button
                color="info"
                onClick={() => addInCart(product)}
                >Add To Cart</Button>
            </CardBody>
        </Card>
    )
}

export default MyCard;