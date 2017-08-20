import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Player from "./Player";
import Loading from "./Loading";
import { doFight } from "../results/actions";

class Results extends Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(doFight);
  }
  render() {
    const { error, winner, loser, loading } = this.props.results;

    if (loading === true) {
      return <Loading text="downloading" speed={100} />;
    }

    if (error) {
      return (
        <div>
          <p>
            {error}
          </p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerOne: state.battle.playerOne,
  playerTwo: state.battle.playerTwo,
  results: state.results
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doFight,
      dispatch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Results);
