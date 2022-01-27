import React from 'react'
import { Button, Form, InputGroup, Row, Table } from 'react-bootstrap';
import{useState} from 'react';
import { guardarEnLocalStorage } from '../utils/localStorage';
import TableMemes from '../components/TableMemes';
import { ID } from '../utils/id';



export default function Admin({memes, setMemes}) {

const [validated, setValidated]= useState(false);
const [input, setInput]= useState({titulo: "", imagen: ""});

console.log (memes)
const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
  const form = event.currentTarget;
  //lo que deberia ejecutarse cuando todos los campos sean valido//
  if (form.checkValidity() === true) {
      const nuevoMeme = { ...input, id:ID()}
      const nuevoArray = [...memes, nuevoMeme];
      setMemes (nuevoArray);
      guardarEnLocalStorage({ key: 'memes', value: nuevoArray});
  }

  setValidated(true);

};


const handleChange = (event)=>{

const {value, name} =event.target;
setInput({...input, [name]:value})
}
    return (
<>
            <h2 className="mt-5">Formulario Crear Meme</h2>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto"
                style={{ width: '500px' }}
            >
                <Form.Group controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Meme"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="imagen">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="imagen"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="http://meme.jpg"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Imagen requerida!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto" >
                        Crear Meme
                        {/* {isLoading && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )} */}
                    </Button>
                </Row>
            </Form>
            <TableMemes memes={memes} />

        </>
    )
}