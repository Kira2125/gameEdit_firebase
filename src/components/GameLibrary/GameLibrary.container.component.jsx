import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../withSpinner/WithSpinner.component";
import {selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";
import GameLibrary from "./GameLibrary.component";

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state),
})

const ContainerGameLibrary = connect(mapStateToProps)(WithSpinner(GameLibrary));

export default  ContainerGameLibrary;