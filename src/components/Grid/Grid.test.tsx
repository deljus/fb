import React from "react";
import { mount } from "enzyme";
import { Row, Col } from "./Grid";

describe("<Row />", () => {
  it("Row render childs", () => {
    const link = mount(<Row />);
    expect(link.find(".grid-row")).toHaveLength(1);
  });
  it("should be span className ", () => {
    let col = mount(<Col span={2} />);
    expect(col.find(".col-2")).toHaveLength(1);
    col = mount(<Col span={4} />);
    expect(col.find(".col-4")).toHaveLength(1);
  });
  it("should be style width property", () => {
    const col = mount(<Col width={200} />);
    expect(col.find(".grid-col").prop("style")).toEqual({
      minWidth: 200,
      width: 200
    });
  });
});
