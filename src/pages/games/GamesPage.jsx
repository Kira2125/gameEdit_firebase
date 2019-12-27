import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import ContainerGameLibrary from "../../components/GameLibrary/GameLibrary.container.component";



const GamePage = ({fetchCollectionsStart}) => {

            useEffect(() => {
                fetchCollectionsStart();
            }, [fetchCollectionsStart]);

        return (
            <div>
                <ContainerGameLibrary/>
            </div>
        )

}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(GamePage);