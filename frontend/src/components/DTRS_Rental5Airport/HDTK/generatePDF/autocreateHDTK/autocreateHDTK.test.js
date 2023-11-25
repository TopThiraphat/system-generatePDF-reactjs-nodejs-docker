import React from "react";
import { shallow } from "enzyme";
import AutocreateHDTK from "./autocreateHDTK";

describe("AutocreateHDTK", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AutocreateHDTK />);
    expect(wrapper).toMatchSnapshot();
  });
});
