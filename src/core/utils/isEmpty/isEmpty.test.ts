import isEmpty from "./isEmpty";

describe("isEmpty fn", () => {
  it("should return true", () => {
    expect(isEmpty({})).toBe(true);
  });
  it("should return false", () => {
    expect(isEmpty({ key: "test" })).toBe(false);
  });
});
