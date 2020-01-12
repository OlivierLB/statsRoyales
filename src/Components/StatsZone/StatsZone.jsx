import React, {Component} from 'react';
import {Container, Row, Col} from "react-grid-system";
export default class StatsZone extends Component {

    render() {
        return(
            <React.Fragment>
                <div className="statsZone">
                    <Container>
                        <Row>
                            <Col sm={2}>
                                One of three columns
                            </Col>
                            <Col sm={8}>
                                <div className="-progress-meter">
                                    <progress max="100" value="80">80</progress>
                                    <progress max="100" value="20">20</progress>
                                    <progress max="100" value="48">48</progress>
                                    <progress max="100" value="21">21</progress>
                                    <progress max="100" value="64">64</progress>
                                </div>
                            </Col>
                            <Col sm={2}>
                                One of three columns
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="navBottom">
                    <ul>
                        <li className="-active">Global</li>
                        <li>Solo</li>
                        <li>Duo</li>
                        <li>Squad</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}