import React, {Component} from 'react';
import {Container} from "react-grid-system";
import chevalierNoir from "../../Assets/Images/Personnages/chevalierNoir.png";
import joker from "../../Assets/Images/Personnages/Joker.png";
import StatsZone from "../StatsZone/StatsZone";

export default class Compare extends Component {

    render() {
        return(
            <React.Fragment>
                <Container>
                    <div className="versus">
                        <div className="left slideGauche">
                            <img src={chevalierNoir} style={{display: "none"}} />
                        </div>
                        <div className="center comparaisonZone">
                            <StatsZone />
                        </div>
                        <div className="right slideDroite">
                            <img src={joker} style={{display: "none"}} />
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}