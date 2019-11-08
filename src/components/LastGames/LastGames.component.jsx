import React, {Component} from 'react';
import './LastGames.styles.scss';
import img1 from '../../images/LastGames/l1.jpg';
import img2 from '../../images/LastGames/l2.jpg';
import img3 from '../../images/LastGames/l3.jpg';
import img4 from '../../images/LastGames/l4.jpg';
import img5 from '../../images/LastGames/l5.jpg';
import img6 from '../../images/LastGames/l6.jpg';
import LastGamesPeace from "../LastGamesPeace/LastGamesPeace.component";

class LastGames extends Component {
    constructor() {
        super();
        this.state = {
            lastGamesLib: [{header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                            image: img1, id: 1},
                {header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                    image: img2, id: 2},
                {header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                    image: img3, id: 3},
                {header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                    image: img4, id: 4},
                {header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                    image: img5, id: 5},
                {header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero!",
                    image: img6, id: 6},]
        }
    }

    render() {
        return (
            <div className='library' style={{backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${this.state.lastGamesLib[5].image})`}}>
                <div className="li-head">
                    <h1>bestsellers</h1>
                </div>
                <ul className="li-library">
                    {this.state.lastGamesLib.map((obj) => {return <li key={obj.id}><LastGamesPeace lastGamesPeace={obj}/></li>})}
                </ul>
            </div>
        )
    }
}

export default LastGames;