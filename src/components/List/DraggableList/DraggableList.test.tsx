import React, { FC } from "react";
import { mount } from "enzyme";
import DraggableList from "./DraggableList";

const TestItem: FC = () => null;

describe("<DraggableList/>", () => {
  it("children from renderItems prop", () => {
    const dList = mount(
      <DraggableList
        renderItems={() => <TestItem />}
        onMoveItems={() => undefined}
        items={[{ id: 1 }]}
      />
    );

    expect(dList.find(TestItem).length).toBe(1);
  });
});
