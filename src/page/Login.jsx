import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { guardarEnLocalStorage } from '../utils/localStorage';
import axios from 'axios';

const user = {nombre: 'rick', email: 'rik@mail.com', password: '123123', role: 'admin'};



export default function Login({ setUser }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ email: '', password: '' });
    const history = useHistory();

    const handleChange = (event) => {
        // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
        const { value, name } = event.target;
        // Declaramos un objeto que contiene una copia de las propiedades del state input,
        // más el dato nuevo ingresado usando el name y value del elemento.
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        const form = event.currentTarget;

        // Chequea que los campos del formulario sean válidos.
        if (form.checkValidity() === true) {
            try {
                
        
                
            
            const response = await axios.post('http://localhost:4000/api/auth/login', input);
            const token = response.data.token;
            guardarEnLocalStorage({key: 'token', value: {token}});
            alert('Bienvenido ' + user.nombre);
            //El push redirecciona a la pantalla indicada en el parametro.
            history.push('/admin');
            

        } catch (error) {
            console.error(error);
            if(error.response.data){
                alert(JSON.stringify(error.response.data));
            };
            console.log(error.response.data);
            alert('Datos incorrectos o error de conexion');
        }
    }
};  
            
          
    return (
        <Container>
            <Row>
                <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                    <Card className="border">
                        <Card.Header className="bg-info">
                            <h4 className="text-white">MeMes</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={input.email}
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="email"
                                        placeholder="Last name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustomUsername">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            value={input.password}
                                            minLength="6"
                                            name="password"
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            placeholder="****"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password is required!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Row>
                                    <Button type="submit" className="mx-auto mt-4">
                                        Iniciar Sesión
                                    </Button>
                                </Row>
                                <Row>
                                    {/* <Link className="mx-auto mt-2" to="/register">
                                        ¿No tiene una cuenta? Cree una aquí
                                    </Link> */}
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
