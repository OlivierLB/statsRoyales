import {SET_STATS_PLAYERS} from "./../Actions/match";

const initialState = {
    statsPlayers : {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_STATS_PLAYERS :
            return {...state, statsPlayers : action.result};
        default :
            return state;
    }
}

export function getStatsPlayers(state){
    return state.match.statsPlayers
}