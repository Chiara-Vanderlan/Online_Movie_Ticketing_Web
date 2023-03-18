//import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import HomePage from './Pages/Home/HomePage';
import AboutUs from './Pages/About/AboutUs';
import Home from './Pages/Home';


function App() {
  return (
    

    
    <Router>
      <div>
         <Switch>

          <Route exact path="/">
          <HomePage/>
          </Route>

          <Route path = "/About">
         
          <AboutUs></AboutUs>
          </Route>


        </Switch>
    </div>
  </Router>

  
  );
}

export default App;
