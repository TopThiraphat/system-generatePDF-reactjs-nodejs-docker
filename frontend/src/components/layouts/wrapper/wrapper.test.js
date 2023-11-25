import React from "react";
import { shallow } from "enzyme";
import Wrapper from "./wrapper";

describe("Wrapper", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
