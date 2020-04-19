import className from "./className";

describe("className fn", () => {
  it("should return empty string", () => {
    expect(className()).toBe("");
  });
  it("should return string of class name", () => {
    expect(className("class1", "class2")).toBe("class1 class2");
  });
  it("should not return string if arg is undefined", () => {
    expect(className("class1", undefined, "class2")).toBe("class1 class2");
  });
});
