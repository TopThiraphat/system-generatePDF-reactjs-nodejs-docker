import React from "react";
import { shallow } from "enzyme";
import CreateVehicle from "./createVehicle";

describe("CreateVehicle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateVehicle />);
    expect(wrapper).toMatchSnapshot();
  });
});
