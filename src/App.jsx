import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavRB } from "./components/TheNav";
import { Container } from "react-bootstrap";
import  Memes  from "./page/Memes";
import Footer  from "./components/Footer";
import Login from "./page/Login";
import Admin from "./page/Admin";
import Perfil from "./page/Perfil";
import{useState} from 'react';
import { leerDeLocalStorage } from "./utils/localStorage";
import {Redirect, Route, Switch} from "react-router";
import DetalleMeme from "./page/DetalleMeme";



const memesLocal = leerDeLocalStorage('memes') || [];
const userLocal = leerDeLocalStorage('user') || {};

function App() {
  // const [seccion, setSeccion] = useState('Perfil');
const [memes, setMemes] = useState(memesLocal);
const [user, setUser] = useState(userLocal);



  return (
    <div className="footer-fix">
      <NavRB user={user} />
      <Container>
        <Switch>
        <Route path="/" exact>
        <Memes memesProp={memes} />
        </Route>

        <Route path="/login">
        <Login setUser={setUser}/>
        </Route>

        {user.role ==='admin' && (
        <Route path="/admin">
        <Admin memes={memes} setMemes={setMemes} />
        </Route>)}

        <Route path="/perfil">
        <Perfil />
        </Route>
        <Route path="/meme/:memeId/">
        <DetalleMeme/>
        </Route>
        <Route path="404">
        "404"
        </Route>
        <Route path="*">
        <Redirect to="/404"/>
        </Route>
        {/* {seccion === 'memes' && <Memes memes={memes} />}
        {seccion ==='Login' && <Login />}
        {seccion === 'Admin' && <Admin memes={memes} setMemes={setMemes} />}
        {seccion === 'Perfil' && <Perfil />} */}
        </Switch>
      </Container>
      <Footer />
    </div>
  );
  }

export default App;
