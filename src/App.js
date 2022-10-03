/**
 * External Dependencies
 * 
 */
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

/**
 * Internal Dependencies
 * 
 */
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/work' element={ <Work /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
