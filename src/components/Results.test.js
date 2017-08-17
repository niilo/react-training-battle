import React from "react";
import Results from "./Results";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});
