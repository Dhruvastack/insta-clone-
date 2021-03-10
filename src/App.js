import React ,{useEffect,createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/screens/Home'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';


const UserContext =createContext() 
function App() {


  return (
  <BrowserRouter>
  <NavBar/>
  <Route exact path ="/" component={Home}/> 

  <Route path ="/signin" component={Login}/>
  <Route path ="/signup" component={Signup}/>
  <Route path ="/profile" component={Profile}/>
  <Route path ="/createpost" component={CreatePost}/>
  </BrowserRouter>
  );
}

export default App;
