import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import { getData } from "../../Service/Service";


const Cards = ({
  id,
  title,
  description,
  url,
  urlToImage 
}) => {
  return (
    <>
    <Card style={{ width: "25rem" }}>
    <Card.Img variant="top" src={urlToImage} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <p>{description}</p>
    <Button varient='primary' onClick={() => window.open(url)}>
    Read More
    </Button>
    </Card.Body>
    </Card>
    </>
  );
};


export default Cards;