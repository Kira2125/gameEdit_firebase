import React, {useEffect} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.component";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header.component";
import 'bootstrap/dist/css/bootstrap.css';
import AuthPage from "./pages/authpage/AuthPage.component";
import Footer from "./components/Footer/Footer.component";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import GamePage from "./pages/games/GamesPage";
import NewsPage from "./pages/news/NewsPage.component";

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Homepage/>}/>
                <Route exact path='/auth' render={() => currentUser ?
                    (<Redirect to='/'/>) : (<AuthPage/>)}/>
                <Route path='/games' render={() => <GamePage/>}/>
                <Route path='/news' render={() => <NewsPage/>}/>
                <Route path='*' render={() => <Homepage/>}/>
            </Switch>
            <Footer/>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
