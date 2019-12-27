import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import MainSlider from "./MainSlider.component";
import WithSpinner from "../withSpinner/WithSpinner.component";
import {selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state),
})

const ContainerMainSlider = connect(mapStateToProps)(WithSpinner(MainSlider));

export default  ContainerMainSlider;