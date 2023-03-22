
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import HomePage from './Pages/Home/HomePage';
import AboutUs from './Pages/About/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import Movies from './Pages/Movies/Movies';
import Register from './Pages/Register/Register';
import Operation from './Pages/Movies/Operation';



function App() {

  return (
    
    <Router>
      <div>
       
         <Switch>
      
          <Route exact path="/">
          <HomePage/>
          </Route>

          <Route path = "/Movies">
          <Movies/>
          </Route>

          <Route path = "/AboutUs">
          <AboutUs/>
          </Route>

          <Route path = "/Register">
          <Register/>
          </Route>

          <Route path = "/Login">
          <Login/>
          </Route>

          <Route path = "/Operation">
            <Operation></Operation>
          </Route>
   
        </Switch>

    </div>
  </Router>
  
  );
}

export default App;
