import capitalize from "./capitalize";

test("return A for input a", () => {
  expect(capitalize("a")).toBe("A");
});

test("return Abcd for input abcd", () => {
  expect(capitalize("abcd")).toBe("Abcd");
});
