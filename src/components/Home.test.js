import React from "react";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders default correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Route>
          <Home />
        </Route>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
