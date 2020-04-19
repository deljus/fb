import React from "react";
import { mount, shallow } from "enzyme";
import Alert from "./Alert";

describe("<Alert />", () => {
  it("should be render text", () => {
    const link = mount(<Alert id="1" text="test text" type="danger" />);
    expect(link.find("span").text()).toBe("test text");
  });
  it("should be className of type", () => {
    let link = shallow(<Alert id="1" text="test text" type="danger" />);
    expect(link.first().hasClass("danger")).toBeTruthy();
    link = shallow(<Alert id="1" text="test text" type="warning" />);
    expect(link.first().hasClass("warning")).toBeTruthy();
    link = shallow(<Alert id="1" text="test text" type="success" />);
    expect(link.first().hasClass("success")).toBeTruthy();
    link = shallow(<Alert id="1" text="test text" type="info" />);
    expect(link.first().hasClass("info")).toBeTruthy();
  });
  it("should be render close btn", () => {
    const link = mount(
      <Alert
        id="1"
        text="test text"
        type="danger"
        onClose={(): void => undefined}
      />
    );
    expect(link.find("Icon")).toBeTruthy();
  });
  it("should be closed after 50 ms", () => {
    const mockFn = jest.fn();
    mount(
      <Alert
        id="1"
        text="test text"
        type="danger"
        timeOut={50}
        onClose={mockFn}
      />
    );

    setTimeout(() => {
      expect(mockFn.mock.calls.length).toBe(1);
      expect(mockFn.mock.calls[0][0]).toBe("1");
    }, 50);
  });
});
