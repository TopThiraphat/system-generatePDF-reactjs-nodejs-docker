import React from "react";
import { shallow } from "enzyme";
import AutocreateVehicle from "./autocreateVehicle";

describe("AutocreateVehicle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AutocreateVehicle />);
    expect(wrapper).toMatchSnapshot();
  });
});
