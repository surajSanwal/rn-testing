import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../src/Button";
import renderer from "react-test-renderer";
test("Button renders correctly", () => {
  const tree = renderer.create(<Button title="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
