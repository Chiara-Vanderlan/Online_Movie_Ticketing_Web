//import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import HomePage from './Pages/Home/HomePage';
import AboutUs from './Pages/About/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp';
import Header from './Pages/Header';
import MoviePage from './Pages/Movie/MoviePage';
import Home from './Pages/Home';


function App() {

 
  return (
    
    
    <Router>
      <div>
       
         <Switch>
        

          <Route exact path="/">
          <HomePage/>
          </Route>

          <Route path = "/AboutUs">
          <AboutUs/>
          </Route>

          <Route path = "/SignUp">
          <SignUp/>
          </Route>

          <Route path = "/Login">
          <Login/>
          </Route>
          
          
          
          <Header/>
          <MoviePage/>
          
          <Home/>
          


        </Switch>
    </div>
  </Router>
  

  
  );
}

export default App;
