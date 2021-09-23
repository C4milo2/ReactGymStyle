import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Bloques y Funcionalidad del navbar 
import Body from './components/Body';
import Section from './components/Section';
import Home from './components/Home';
import Compras from './components/Compras';

//importaciones de las clases personalizadas de el usuario

import Lunes from './components/Horarios/Lunes';
import Martes from './components/Horarios/Martes';
import Miercoles from './components/Horarios/Miercoles';
import Jueves from './components/Horarios/Jueves';
import Viernes from './components/Horarios/Viernes';
import Sabado from './components/Horarios/Sabado';
import Domingo from './components/Horarios/Domingo';


//Horario Ma_and_tar (aqui el usuario puede seleccionar entre mañana y tarde )

import Mañana from './components/Horarios/Ma_and_tar/Mañana';
import Tarde from './components/Horarios/Ma_and_tar/Tarde';

// importacion para el manejo de el apartado de legueo junto al navbar 

import Login from './components/Logeos/Login';
import Register from './components/Logeos/Register';

// apartado para la creacion de el usuario que contendra las clases añadidas por el usuario 
import User from './components/Perfil/User'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Rutas Para Redireccionar al ususario */}
        <Switch>
          {/* Rutas Navbar  */}
          <Route path="/" exact component={Body} />
          <Route path="/Section" exact component={Section} />
          <Route path="/Compras" exact component={Compras} />
          <Route path="/Home" exact component={Home} />

          {/* Rutas para que el usuario pueda seleccionar su clase y la personalice a su gusto  */}

          <Route path="/Lunes" exact component={Lunes} />
          <Route path="/Martes" exact component={Martes} />
          <Route path="/Miercoles" exact component={Miercoles} />
          <Route path="/Jueves" exact component={Jueves} />
          <Route path="/Viernes" exact component={Viernes} />
          <Route path="/Sabado" exact component={Sabado} />
          <Route path="/Domingo" exact component={Domingo} />

          {/* Ruta para que un modal sea mas interactivo en la carpeta horario/Ma_and_tar  */}
          <Route path="/Mañana" exact component={Mañana} />
          <Route path="/Tarde" exact component={Tarde} />

          {/* Rutas para la creacion de el login y register del usuario  */}

          <Route path="/Login" exact component={Login}/>
          <Route path="/Register" exact component={Register}/>

          {/* apartado para el usuario  */}

          <Route path="/User" exact component={User}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
