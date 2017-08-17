import React from "react";
import PlayerInput from "./PlayerInput";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer
    .create(
      <PlayerInput
        id="1"
        label="user1"
        onSubmit={function() {
          alert("hep");
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
