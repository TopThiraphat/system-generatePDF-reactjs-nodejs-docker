import React from "react";
import { shallow } from "enzyme";
import CreateDesktop from "./createDesktop";

describe("CreateDesktop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateDesktop />);
    expect(wrapper).toMatchSnapshot();
  });
});
