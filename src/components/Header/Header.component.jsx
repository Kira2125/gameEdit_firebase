import React from 'react';
import  logo from "../../images/new_logo.png";
import css from './Header.module.scss';
import {Link, withRouter} from "react-router-dom";

const Header = (props) => {
    console.log(props);
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
                            <div><img src={logo} className={css.img}/></div>
                        </div>
                    </li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">BUY</a></li>
                    <li><a href=""><Link to='/auth'>SIGN IN</Link></a></li>
                </ul>
            </nav>
        </header>
)
}

export default withRouter(Header);