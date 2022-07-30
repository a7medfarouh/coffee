
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import { Home } from './Component/Home/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { Contact } from './Component/Contact/Contact';
import {About} from './Component/About/About';
import { Products } from './Component/Products/Products';

function App() {
  return <>
  <Navbar/>
  <Home/>
  <About/>
  <Products/>
  <Contact/>
  </>
}

export default App;
