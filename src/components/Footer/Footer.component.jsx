import React from 'react';
import './Footer.styles.scss';
import {withRouter} from "react-router-dom";

const Footer = (props) => {
    let rOsa = null;
    if(props.location.pathname == "/auth") {
        rOsa = true;
    }
    return (
        <footer className={rOsa ? 'noFooter':'footer'}>

            <ul className={rOsa ? 'noUl':''}>
                <li><a href=""><i className="fab fa-facebook-square"></i></a>
                    <div className="descr">follow us in facebook</div>
                </li>
                <li><a href=""><i className="fab fa-twitter"></i></a>
                    <div className="descr">follow us in twitter</div>
                </li>
                <li><a href=""><i className="fab fa-vk"></i></a>
                    <div className="descr">follow us vkontakte</div>
                </li>
                <li><a href=""><i className="fab fa-telegram-plane"></i></a>
                    <div className="descr">follow us in telegram</div>
                </li>
            </ul>

        </footer>
    )
}

export default withRouter(Footer);