import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../withSpinner/WithSpinner.component";
import {selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";
import NewsLibrary from "./NewsLibrary.component";


const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
})

const ContainerNewsLibrary = connect(mapStateToProps)(WithSpinner(NewsLibrary));

export default  ContainerNewsLibrary;