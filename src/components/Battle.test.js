import React from "react";
import Battle from "./Battle";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer.create(<Battle />).toJSON();
  expect(tree).toMatchSnapshot();
});
