import {getJson} from "./../../Utils/http";
import config from './../../Utils/config';

export const SET_STATS_PLAYERS = "SET_STATS_PLAYERS";

export function setStatsJoueurs(result) {
    console.log(result);
    return { type: SET_STATS_PLAYERS, result}
}

export function getMatchStats(playerOne, playerTwo){
    return (dispatch, getState) => {
        fetch(config['base_url'] + 'versus/' + playerOne + "/" + playerTwo,{
            method: 'GET',
            headers: {
                'Accept' : '*/*',
                'Content-Type': 'application/json'
            }
        }).then(response => getJson(response))
            .then(result => {
                dispatch(setStatsJoueurs(result));
            })
            .catch((e) => {
            })
    }
}