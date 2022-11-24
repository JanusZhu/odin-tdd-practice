import analyzeArray from "./analyzeArray";

test("only 1 element", () => {
  expect(analyzeArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

test("only 2 element", () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});
