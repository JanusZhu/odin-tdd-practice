import reverseString from "./reverseString";

test("Returns AAAAA with input AAAA", () => {
  expect(reverseString("AAAA")).toBe("AAAA");
});

test("Returns dcba with input abcd", () => {
  expect(reverseString("abcd")).toBe("dcba");
});
