import React from "react";
import { mount, shallow } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  it("should be render btn text", () => {
    const btn = mount(<Button>Text</Button>);
    expect(btn.find("button").text()).toBe("Text");
  });
  it("should be className of type", () => {
    let btn = shallow(<Button type="primary" />);
    expect(btn.hasClass("btn-primary")).toBeTruthy();
    btn = shallow(<Button type="secondary" />);
    expect(btn.hasClass("btn-secondary")).toBeTruthy();
    btn = shallow(<Button type="danger" />);
    expect(btn.hasClass("btn-danger")).toBeTruthy();
    btn = shallow(<Button type="warning" />);
    expect(btn.hasClass("btn-warning")).toBeTruthy();
    btn = shallow(<Button type="info" />);
    expect(btn.hasClass("btn-info")).toBeTruthy();
    btn = shallow(<Button type="success" />);
    expect(btn.hasClass("btn-success")).toBeTruthy();
  });
  it("should be className of circle prop", () => {
    const btn = shallow(<Button circle />);
    expect(btn.hasClass("circle")).toBeTruthy();
  });
  it("should be className of ghost prop", () => {
    const btn = shallow(<Button ghost />);
    expect(btn.hasClass("ghost")).toBeTruthy();
  });
  it("should be className of size prop", () => {
    let btn = shallow(<Button />);
    expect(btn.hasClass("size-md")).toBeTruthy();
    btn = shallow(<Button size="sm" />);
    expect(btn.hasClass("size-sm")).toBeTruthy();
    btn = shallow(<Button size="lg" />);
    expect(btn.hasClass("size-lg")).toBeTruthy();
  });
});
