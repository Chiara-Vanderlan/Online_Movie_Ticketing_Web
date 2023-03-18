//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
//import About from './Pages/About';


function App() {
  return (
    //<Home></Home>

    
    <Router>
      <div>
         <Switch>

          <Route path="/">
              <Home/>
          </Route>


        </Switch>
    </div>
  </Router>

  
  );
}

export default App;
