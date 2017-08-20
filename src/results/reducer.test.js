import * as a from "./actions";
import reducer from "./reducer";

const player1 = {
  profile: {
    name: "react",
    followers: 1,
    following: 1,
    public_repos: 2,
    stargazers_count: 73600,
    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4"
  }
};

const player2 = {
  profile: {
    name: "react2",
    followers: 1,
    following: 1,
    public_repos: 2,
    stargazers_count: 73600,
    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4"
  }
};

it("renders default correctly", () => {
  const state = reducer(undefined, a.setFirstPlayer(player1));
  const result = reducer(state, a.setSecondPlayer(player2));
  expect(result).toMatchSnapshot();
});
