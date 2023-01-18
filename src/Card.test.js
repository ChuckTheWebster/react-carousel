import React from "react";
import { render } from "@testing-library/react"
import Card from "./Card";

//TODO: Ask convention for organizing tests? Always have describe?
describe("render without crashing", function () {
  it("renders without crashing", function() {
    render(<Card caption="what" src="./photos/image1.jpg" currNum={1} totalNum={3}/>)
  });
});

describe("snapshot tests for stability", function () {
  it("matches snapshot", function () {
    const { container } = render(<Card caption="what" src="./photos/image1.jpg" currNum={1} totalNum={3}/>);
    expect(container).toMatchSnapshot();
  });
});