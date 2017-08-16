import React from "react";
import Popular from "./Popular";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer.create(<Popular />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders selected Javascriot correctly", () => {
  const lang = "JavaScript";
  const tree = renderer.create(<Popular lang={lang} />).toJSON();
  expect(tree).toMatchSnapshot();
});
