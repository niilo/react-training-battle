import React from "react";
import Loading from "./Loading";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer
    .create(<Loading text="downloading" speed={100} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
