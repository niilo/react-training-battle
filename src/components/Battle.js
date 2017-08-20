import React from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setFirstPlayer,
  setSecondPlayer,
  resetFirstPlayer,
  resetSecondPlayer
} from "../battle/actions";

const Battle = props => {
  const match = props.match;
  console.log(props);
  const playerOneName = props.playerOne.name;
  const playerTwoName = props.playerTwo.name;
  const playerOneImage = props.playerOne.image;
  const playerTwoImage = props.playerTwo.image;
  return (
    <div>
      <div className="row">
        {!playerOneName &&
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={props.setFirstPlayer}
          />}
        {playerOneImage !== null &&
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
            onReset={props.resetFirstPlayer}
            id="playerOne"
          />}
        {!playerTwoName &&
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={props.setSecondPlayer}
          />}
        {playerTwoImage !== null &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
            onReset={props.resetSecondPlayer}
            id="playerTwo"
          />}
      </div>
      {playerOneImage &&
        playerTwoImage &&
        <Link
          className="button"
          to={{
            pathname: match + "/results",
            search:
              "?playerOneName=" +
              playerOneName +
              "&playerTwoName=" +
              playerTwoName
          }}
        >
          Battle
        </Link>}
    </div>
  );
};

const mapStateToProps = state => ({
  playerOne: state.battle.playerOne,
  playerTwo: state.battle.playerTwo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFirstPlayer,
      setSecondPlayer,
      resetFirstPlayer,
      resetSecondPlayer
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
