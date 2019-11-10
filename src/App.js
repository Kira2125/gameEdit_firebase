import React, {Component} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.component";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header.component";
import 'bootstrap/dist/css/bootstrap.css';
import AuthPage from "./pages/authpage/AuthPage.component";
import Footer from "./components/Footer/Footer.component";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Homepage/>}/>
                <Route exact path='/auth' render={() => <AuthPage/>}/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default App;
