import React from "react";
import { shallow } from "enzyme";
import AutocreateDesktop from "./autocreateDesktop";

describe("AutocreateDesktop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AutocreateDesktop />);
    expect(wrapper).toMatchSnapshot();
  });
});
