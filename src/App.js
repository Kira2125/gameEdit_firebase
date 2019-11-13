import React, {Component} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.component";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header.component";
import 'bootstrap/dist/css/bootstrap.css';
import AuthPage from "./pages/authpage/AuthPage.component";
import Footer from "./components/Footer/Footer.component";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {auth, createUserProfileDocument} from "./firebase/firebase";
import GamePage from "./pages/games/GamesPage";
import NewsPage from "./pages/news/NewsPage.component";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
  render() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Homepage/>}/>
                <Route exact path='/auth' render={() => <AuthPage/>}/>
                <Route path='/games' render={() => <GamePage/>}/>
                <Route path='/news' render={() => <NewsPage/>}/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
