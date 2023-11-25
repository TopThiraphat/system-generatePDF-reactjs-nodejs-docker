import React from "react";
import { shallow } from "enzyme";
import DownloadDesktop from "./downloadDesktop";

describe("DownloadDesktop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DownloadDesktop />);
    expect(wrapper).toMatchSnapshot();
  });
});
