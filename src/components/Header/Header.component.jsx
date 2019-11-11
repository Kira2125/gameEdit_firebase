import React from 'react';
import  logo from "../../images/new_logo.png";
import css from './Header.module.scss';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {auth} from "../../firebase/firebase";

const Header = (props) => {
    let some = null;
    if(props.location.pathname == "/auth") {
        some = true;
    }
    return(
        <header className={some ? css.header: null}>
            <nav>
                <ul>
                   <li>
                        <div className={css.logo}>
                            <div> <Link to='/'><img src={logo} className={css.img}/></Link></div>
                        </div>
                    </li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">BUY</a></li>
                    {props.currentUser ? <li onClick={() => auth.signOut()}><a href="">SIGN OUT</a></li>
                        :<li><a href=""><Link to='/auth'>SIGN IN</Link></a></li>}

                </ul>
            </nav>
        </header>
)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(withRouter(Header));