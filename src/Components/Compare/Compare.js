import {connect} from "react-redux";
import Compare from './Compare.jsx';
import {getStatsPlayers} from "../../Redux/Reducers/match";

const mapStateToProps = (state) => {
    return {
        statsPlayers : getStatsPlayers(state)
    }
};

export default connect(mapStateToProps)(Compare);
