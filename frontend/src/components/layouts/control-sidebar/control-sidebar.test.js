import React from "react";
import { shallow } from "enzyme";
import ControlSidebar from "./control-sidebar";

describe("ControlSidebar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ControlSidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
