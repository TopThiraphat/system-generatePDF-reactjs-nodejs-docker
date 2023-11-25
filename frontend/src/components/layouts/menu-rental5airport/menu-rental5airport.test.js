import React from "react";
import { shallow } from "enzyme";
import MenuRental5airport from "./menu-rental5airport";

describe("MenuRental5airport", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MenuRental5airport />);
    expect(wrapper).toMatchSnapshot();
  });
});
