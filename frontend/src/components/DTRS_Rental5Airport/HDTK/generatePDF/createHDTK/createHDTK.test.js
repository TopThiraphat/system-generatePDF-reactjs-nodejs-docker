import React from "react";
import { shallow } from "enzyme";
import createHDTK from "./createHDTK";

describe("createHDTK", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<createHDTK />);
    expect(wrapper).toMatchSnapshot();
  });
});
