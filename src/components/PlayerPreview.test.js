import React from "react";
import PlayerPreview from "./PlayerPreview";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const props = {
    avatar: "https://avatars3.githubusercontent.com/u/69631?v=4",
    username: "react",
    id: "react"
  };

  const tree = renderer
    .create(
      <PlayerPreview
        {...props}
        onReset={function() {
          alert();
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
