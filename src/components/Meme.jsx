import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './meme.css'; 
import { Link } from 'react-router-dom';
export default function Meme(props) {



    return (

<Card  className= "card-meme">
  <Card.Img variant="top" src={props.meme.imagen} />
  <Card.Body>
    <Card.Title>{props.meme.titulo}</Card.Title>
{/* <span>
{props.meme.publishedAt}
    </span> */}
  </Card.Body>
  <Button as = {Link} to={`/meme/${props.meme.id}`}>Ver Detalle</Button>
</Card> 
        
    )
}