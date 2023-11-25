import React from "react";
import { shallow } from "enzyme";
import DownloadVehicle from "./downloadVehicle";

describe("DownloadVehicle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DownloadVehicle />);
    expect(wrapper).toMatchSnapshot();
  });
});
