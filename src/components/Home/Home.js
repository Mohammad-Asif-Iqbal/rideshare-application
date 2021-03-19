import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json';
import { Container, Row, Card, Col } from 'react-bootstrap';

const Home = () => {

    const [vehicles, setVehicles] = useState([]);
    useEffect(()=>{
        setVehicles(fakeData.vehicles)
    },[])
    const cardStyle = {
        width: '18rem', 
        marginTop:'60px',
        marginBottom:'10px', 
        height:'200px',
        textAlign:'center',
        backgroundColor:'purple',
        color:'white',
        cursor:'pointer'
    };
    const cardImgStyle = {
        marginTop:'20px',
        height:'90px',
        width:'90px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto'
    }   
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    {
                        vehicles.map(detail=>
                            <Col xs={12} md={3} className="d-flex justify-content-center">
                                <Card onClick={()=>console.log(detail.id)} style={cardStyle}>
                                    <Card.Img variant="top" src={detail.image} style={cardImgStyle} />
                                    <Card.Body>
                                        <Card.Title>{detail.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;