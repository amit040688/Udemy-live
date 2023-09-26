import './App.css';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';






const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
      </Routes>
    </>
  );
}

export default App;
