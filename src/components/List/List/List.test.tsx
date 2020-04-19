import React, { FC } from "react";
import { mount } from "enzyme";
import List from "./List";

const TestItem: FC = () => null;

describe("<List />", () => {
  it("should be render children", () => {
    const list = mount(
      <List>
        <TestItem />
      </List>
    );
    expect(list.find(TestItem).length).toBe(1);
  });
  it("should be render children from renderItems prop", () => {
    const mockFn = jest.fn();
    mount(<List items={[{ testProp: true }]} renderItems={mockFn} />);
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toEqual({ testProp: true });
  });
});
