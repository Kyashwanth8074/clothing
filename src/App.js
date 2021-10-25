import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.util';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }

  render(){
    return (
      <div>
        <h1>Project</h1>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;


//$ ssh-keygen -t rsa -b 4096 -C "kyashwanth8074@gmail.com"

//kyashwanth8074@gmail.com


//import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
//import 'firebase/compat/auth';
