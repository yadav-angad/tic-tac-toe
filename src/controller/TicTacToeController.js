import React, {Component} from "react";
import "react-bootstrap/"
import ResetIcon from '../img/refresh-png-8.png'

let selectedBox = [];
export default class TicTacToeController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      player1: '',
      player2: '',
      tic: '',
      counter: 1,
      player1Selection: 'X',
      player2Selection: '0',
      tic1: '',
      tic2: '',
      tic3: '',
      tic4: '',
      tic5: '',
      tic6: '',
      tic7: '',
      tic8: '',
      tic9: '',
      disableButtonX: false,
      disableButton0: false,
      player1Winner: '',
      player2Winner: ''
    };
  }

  reset = () => {
    document.getElementById("tic1").style.backgroundColor = "transparent";
    document.getElementById("tic2").style.backgroundColor = "transparent";
    document.getElementById("tic3").style.backgroundColor = "transparent";
    document.getElementById("tic4").style.backgroundColor = "transparent";
    document.getElementById("tic5").style.backgroundColor = "transparent";
    document.getElementById("tic6").style.backgroundColor = "transparent";
    document.getElementById("tic7").style.backgroundColor = "transparent";
    document.getElementById("tic8").style.backgroundColor = "transparent";
    document.getElementById("tic9").style.backgroundColor = "transparent";
    this.setState({
      name: '',
      player1: '',
      player2: '',
      tic: '',
      counter: 1,
      player1Selection: 'X',
      player2Selection: '0',
      tic1: '',
      tic2: '',
      tic3: '',
      tic4: '',
      tic5: '',
      tic6: '',
      tic7: '',
      tic8: '',
      tic9: '',
      disableButtonX: false,
      disableButton0: false,
      player1Winner: '',
      player2Winner: ''
    });
  };

  handlePlayerSelection = event => {
    const target = event.target;
    const value = target.value;
    let player1 = '';
    let player2 = '';
    if (value === 'playerSelected0') {
      player1 = '0';
      player2 = 'X';
      this.setState({
        player1, player2,
        disableButtonX: true
      });
    } else if (value === 'playerSelectedX') {
      player1 = 'X';
      player2 = '0';
      this.setState({
        player1, player2,
        disableButton0: true
      });
    }
  };

  checkWinningCombination(ticTacToe) {
    console.log('ticTacToe : ' + ticTacToe + " this.state.tic1 :: " + selectedBox["tic3"]);
    if (selectedBox["tic1"] === ticTacToe && selectedBox["tic2"] === ticTacToe && selectedBox["tic3"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic1", "tic2", "tic3", ticTacToe);
    } else if (selectedBox["tic4"] === ticTacToe && selectedBox["tic5"] === ticTacToe && selectedBox["tic6"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic4", "tic5", "tic6", ticTacToe);
    } else if (selectedBox["tic7"] === ticTacToe && selectedBox["tic8"] === ticTacToe && selectedBox["tic9"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic7", "tic8", "tic9", ticTacToe);
    } else if (selectedBox["tic1"] === ticTacToe && selectedBox["tic4"] === ticTacToe && selectedBox["tic7"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic1", "tic4", "tic7", ticTacToe);
    } else if (selectedBox["tic2"] === ticTacToe && selectedBox["tic5"] === ticTacToe && selectedBox["tic8"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic2", "tic5", "tic8", ticTacToe);
    } else if (selectedBox["tic3"] === ticTacToe && selectedBox["tic6"] === ticTacToe && selectedBox["tic9"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic3", "tic6", "tic9", ticTacToe);
    } else if (selectedBox["tic1"] === ticTacToe && selectedBox["tic5"] === ticTacToe && selectedBox["tic9"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic1", "tic5", "tic9", ticTacToe);
    } else if (selectedBox["tic3"] === ticTacToe && selectedBox["tic5"] === ticTacToe && selectedBox["tic7"] === ticTacToe) {
      console.log(ticTacToe + ' is winner');
      this.colorWinningCombination("tic3", "tic5", "tic7", ticTacToe);
    }
  }

  colorWinningCombination(boxId1, boxId2, boxId3, ticTacToe) {
    document.getElementById(boxId1).style.backgroundColor = "lightBlue";
    document.getElementById(boxId2).style.backgroundColor = "lightBlue";
    document.getElementById(boxId3).style.backgroundColor = "lightBlue";

    console.log(ticTacToe + " :: " + this.state.player1 + " :: " + this.state.player2);
    if (ticTacToe === this.state.player1) {
      this.setState({
        disableButton: true,
        player1Winner: '**** Winner ****'
      });
    } else if (ticTacToe === this.state.player2) {
      this.setState({
        disableButton: true,
        player2Winner: '**** Winner ****'
      });
    }
  }


  boxAlreadyFilled(boxId) {
    switch (boxId) {
      case "tic1":
        return (!this.state.tic1);
      case "tic2":
        return (!this.state.tic2);
      case "tic3":
        return (!this.state.tic3);
      case "tic4":
        return (!this.state.tic4);
      case "tic5":
        return (!this.state.tic5);
      case "tic6":
        return (!this.state.tic6);
      case "tic7":
        return (!this.state.tic7);
      case "tic8":
        return (!this.state.tic8);
      case "tic9":
        return (!this.state.tic9);
      default:
        return true;
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('target : ' + target + ' value : ' + value +' name : ' + name);
    if (this.state.player1 || this.state.player2) {
      let ticTacToe = this.setFunction();
      selectedBox[name] = ticTacToe;
      if (this.state.counter % 2 === 0 && this.boxAlreadyFilled(name)) {
        this.fillBox(name, ticTacToe);
      } else if (this.state.counter % 2 !== 0 && this.boxAlreadyFilled(name)) {
        this.fillBox(name, ticTacToe);
      }
      this.checkWinningCombination(ticTacToe);
    } else {
      alert('Please select X or 0');
    }
  };

  fillBox(name, ticTacToe) {
    this.setState({
      [name]: ticTacToe,
      counter: this.state.counter + 1
    });
  }

  setFunction() {
    if (this.state.player1 && this.state.player1 === '0') {
      this.setState({
        player1: '',
        player2: 'X'
      });
      return '0';
    } else if (this.state.player1 && this.state.player1 === 'X') {
      this.setState({
        player1: '',
        player2: '0'
      });
      return 'X';
    } else if (this.state.player2 && this.state.player2 === '0') {
      this.setState({
        player2: '',
        player1: 'X'
      });
      return '0';
    } else if (this.state.player2 && this.state.player2 === 'X') {
      this.setState({
        player2: '',
        player1: '0'
      });
      return 'X';
    }
  }

  render() {
    return (
        <div className="content divLeftAlign">
          <div className="col-4 col-s-4 middleContainer displayFlexColumn">
            <div className="col-4 col-s-4">&nbsp;</div>
            <div className="col-11 col-s-11 displayFlexRowCenterFloatRight">
              <button className="resetButton" onClick={this.reset}>
                <img className="imageHeight cursor" src={ResetIcon} alt="reset"/>
              </button>
            </div>
            <div className="col-6 col-s-6 displayFlexRowCenter">
              <div className="col-6 col-s-6 displayFlexRowCenter padding5px">
                <button name="player1Selection"
                        id="playerSelectedX"
                        value="playerSelectedX"
                        className="col-5 col-s-5 buttonHeight"
                        onClick={this.handlePlayerSelection}
                        disabled={this.state.disableButtonX}>X
                </button>
              </div>
              <div className="col-6 col-s-6 displayFlexRowCenter padding5px">
                <button name="player2Selection"
                        id="playerSelected0"
                        value="playerSelected0"
                        className="col-5 col-s-5 buttonHeight"
                        onClick={this.handlePlayerSelection}
                        disabled={this.state.disableButton0}>0
                </button>
              </div>
            </div>
            <div className="col-10 col-s-10 displayFlexColumn">
              <div className="col-8 col-s-8 displayFlexRowCenterFloatLeft padding5px">
                <div className="displayFlexRowCenterFloatLeft">
                  <label className="boldFont displayFlexRowCenter">Player 1: </label>
                </div>
                <div className="displayFlexRowCenter labelStyle">
                  <div className="displayFlexRowCenter">
                    <label className="displayFlexRowCenter">{this.state.player1}</label>
                  </div>
                </div>
                <div className="displayFlexRowCenterFloatRight">
                  <div className="displayFlexRowCenterFloatRight">
                    <label className="displayFlexRowCenterFloatRight">{this.state.player1Winner}</label>
                  </div>
                </div>
              </div>
              <div className="col-8 col-s-8 displayFlexRowCenterFloatLeft padding5px">
                <div className="displayFlexRowCenterFloatLeft">
                  <label className="boldFont">Player 2: </label>
                </div>
                <div className="displayFlexRowCenter labelStyle">
                  <div className="displayFlexRowCenter">
                    <label>{this.state.player2}</label>
                  </div>
                </div>
                <div className="displayFlexRowCenterFloatRight">
                  <div className="displayFlexRowCenterFloatRight">
                    <label className="displayFlexRowCenterFloatRight">{this.state.player2Winner}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-s-6 displayFlexColumn cursor">
              <div className="col-12 col-s-12 displayFlexRowCenter">
                <div className="col-4 col-s-4 divButton">
                  <a id="tic1" name="tic1" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic1}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic2" name="tic2" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic2}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic3" name="tic3" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic3}</a>
                </div>
              </div>
              <div className="col-12 col-s-12 displayFlexRowCenter">
                <div className="col-4 col-s-4 divButton">
                  <a id="tic4" name="tic4" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic4}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic5" name="tic5" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic5}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic6" name="tic6" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic6}</a>
                </div>
              </div>
              <div className="col-12 col-s-12 displayFlexRowCenter">
                <div className="col-4 col-s-4 divButton">
                  <a id="tic7" name="tic7" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic7}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic8" name="tic8" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic8}</a>
                </div>
                <div className="col-4 col-s-4 divButton">
                  <a id="tic9" name="tic9" className="col-12 col-s-12 buttonHeightWidth displayFlexRowCenter"
                          onClick={this.handleInputChange}>{this.state.tic9}</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-s-6">&nbsp;</div>
          </div>
        </div>
    );
  }
}