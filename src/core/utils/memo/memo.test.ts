import memo from "./memo";

describe("memoOnce fn", () => {
  it("should return function", () => {
    expect(memo(() => null)).toBeInstanceOf(Function);
  });
  it("should call the function once if the arguments have not changed", () => {
    let i = 1;
    const testFn = memo(() => {
      return i++;
    });

    expect(testFn("arg")).toBe(1);
    expect(testFn("arg")).toBe(1);

    expect(testFn("changedArg")).toBe(2);
  });
});
