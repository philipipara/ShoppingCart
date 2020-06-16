import React, {useState, useEffect} from "react";
import { random, commerce} from "faker";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import Axios from "axios";
import MyCard from "./Card";

const apikey = "563492ad6f91700001000001912e1487e97e427289920ca6b25af0f8";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";


const BuyPage = ({addInCart}) => {
    
  
    const [product, setProduct] = useState([]);

    const fetchPhotos = async () => {
        const {data} = await Axios.get(url, {
            headers: {
                Authorization: apikey
            }
        });
   

        const { photos } = data;

       
    
      
        const allProduct = photos.map(photo => ({
              smallImage: photo.src.medium,
              tinyImage: photo.src.tiny,
              productName: random.word().toUpperCase(),
              productPrice: commerce.price(),
              id: random.uuid()

        }));

        setProduct(allProduct);

    };


  


    useEffect(() => {
        fetchPhotos()
    }, []);

    return(
        <Container fluid>
            <Jumbotron className="p-5 mt-5">
            <h1 className="text-success text-center">
                Items For Sale
            </h1>
            </Jumbotron>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <MyCard product={product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

};

export default BuyPage;