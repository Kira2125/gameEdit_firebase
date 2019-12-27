import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import ContainerNewsLibrary from "../../components/NewsLibrary/NewsLibarary.container.component";



const NewsPage = ({fetchCollectionsStart}) => {
        useEffect(() => {
            fetchCollectionsStart();
        }, [fetchCollectionsStart]);

        return (
            <div>
                <ContainerNewsLibrary/>
            </div>
        )

}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(NewsPage);