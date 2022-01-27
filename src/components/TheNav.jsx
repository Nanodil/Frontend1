import {Navbar, Container, Nav} from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';


export const NavRB = (user) => {


    return (

           <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        < Nav.Link as={NavLink} to="/" exact activeClassName="text-white">Memes</Nav.Link>
        <Nav.Link as={NavLink} to="/login" exact activeClassName="text-white">Login</Nav.Link>
        <Nav.Link as={NavLink} to ="/perfil" exact activeClassName="text-white">Perfil</Nav.Link>
        {user.role ==='admin' && <Nav.Link as={NavLink} to= "/admin"activeClassName="text-white">Subir nuevo meme</Nav.Link>}
        {/* <Nav.NavLink onClick={()=>{props.setSeccion ('memes')}} >Memes</Nav.NavLink>
        <Nav.NavLink onClick={()=>{props.setSeccion ('Login')}}>Login</Nav.NavLink>
        <Nav.NavLink onClick={()=>{props.setSeccion ('Perfil')}}>Perfil</Nav.NavLink>
        <Nav.NavLink onClick={()=>{props.setSeccion ('Admin')}}>Subir Nuevo Meme</Nav.NavLink> */}



      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 

    )
}