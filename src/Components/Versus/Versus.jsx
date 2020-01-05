import React, {Component} from 'react';
import { Container } from 'react-grid-system';
import chevalierNoir from './../../Assets/Images/Personnages/chevalierNoir.png'
import joker from './../../Assets/Images/Personnages/Joker.png'

export default class Versus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerOne : "",
            playerTwo : "",
            errorOne : false,
            errorTwo : false,
            correctOne : false,
            correctTwo : false

        };
        this.fight = this.fight.bind(this);
        this.editOne = this.editOne.bind(this);
        this.editTwo = this.editTwo.bind(this);
    }

    fight(){
        if(this.state.playerOne === ""){
            this.setState({errorOne : true, correctOne : false})
        }else{
            this.setState({errorOne : false, correctOne : true})
        }
        if(this.state.playerTwo === ""){
            this.setState({errorTwo : true, correctTwo : false})
        }else{
            this.setState({errorTwo : false, correctTwo : true})
        }
        if(this.state.playerOne !== "" && this.state.playerTwo !== ""){
            this.props.getMatchStats(this.state.playerOne, this.state.playerTwo)
        }
    }

    editOne(e){
        this.setState({playerOne : e.target.value});
    }

    editTwo(e){
        this.setState({playerTwo : e.target.value});
    }

    render() {
        return(
            <React.Fragment>
                <Container>
                    <div className="versus">
                        <div className="left">
                            <img src={chevalierNoir} style={{display: "none"}} />
                            <input
                                type="text"
                                name="name"
                                className={this.state.errorOne ? "questionInvalid question" : this.state.correctOne ? "questionValid question" : "question"}
                                id="nme"
                                autoComplete="off"
                                required
                                onChange={this.editOne}
                            />
                            <label htmlFor="nme"><span>Player One</span></label>
                        </div>
                        <div className="center">
                            <a href={this.state.playerOne !== "" && this.state.playerTwo !== ""? "/match": "/"}>
                                <h1 className="vs" onClick={this.fight} >Vs</h1>
                            </a>
                        </div>
                        <div className="right">
                            <img src={joker} style={{display: "none"}} />
                            <input
                                type="text"
                                name="name"
                                className={this.state.errorTwo ? "questionInvalid question" : this.state.correctTwo ? "questionValid question" : "question"}
                                id="nme"
                                autoComplete="off"
                                required
                                onChange={this.editTwo}
                            />
                            <label htmlFor="nme"><span>Player Two</span></label>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}