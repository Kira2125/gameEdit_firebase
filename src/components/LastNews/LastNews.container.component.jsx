import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import WithSpinner from "../withSpinner/WithSpinner.component";
import {selectCollectionIsLoaded} from "../../redux/shop/shop.selectors";
import LastNews from "./LastNews.component";

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
})

const ContainerLastNews = connect(mapStateToProps)(WithSpinner(LastNews));

export default  ContainerLastNews;