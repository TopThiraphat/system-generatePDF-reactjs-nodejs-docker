import React from "react";
import { shallow } from "enzyme";
import DownloadHDTK from "./downloadHDTK";

describe("DownloadHDTK", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DownloadHDTK />);
    expect(wrapper).toMatchSnapshot();
  });
});
