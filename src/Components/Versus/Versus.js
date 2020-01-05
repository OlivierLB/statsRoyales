import {connect} from "react-redux";
import Versus from './Versus.jsx';
import {getMatchStats} from "../../Redux/Actions/match";

const mapDispatchToProps = (dispatch) => {
    return {
        getMatchStats: (playerOne, playerTwo) => dispatch(getMatchStats(playerOne, playerTwo))
    }
};

export default connect(undefined, mapDispatchToProps)(Versus);
