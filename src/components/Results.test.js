import React from "react";
import Results from "./Results";
import renderer from "react-test-renderer";

beforeEach(() => {
  window.fetch = jest.genMockFunction();
});

it("renders default correctly", () => {
  window.fetch
    .mockReturnValueOnce(Promise.resolve(new Response("{}")))
    .mockReturnValue(Promise.resolve(new Response("{}")));
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});
