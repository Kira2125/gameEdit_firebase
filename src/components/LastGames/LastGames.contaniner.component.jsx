import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../withSpinner/WithSpinner.component";
import {selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";
import LastGames from "./LastGames.component";

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
})

const ContainerLastGames = connect(mapStateToProps)(WithSpinner(LastGames));

export default  ContainerLastGames;