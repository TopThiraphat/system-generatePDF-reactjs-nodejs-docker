import React from "react";
import { shallow } from "enzyme";
import ControlSidebarBg from "./control-sidebar-bg";

describe("ControlSidebarBg", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ControlSidebarBg />);
    expect(wrapper).toMatchSnapshot();
  });
});
