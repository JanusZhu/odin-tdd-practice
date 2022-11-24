import caesarCipher from "./caesarCipher";

test("simple one letter", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("simple two letter", () => {
  expect(caesarCipher("ab")).toBe("bc");
});

test("upper and lower cases", () => {
  expect(caesarCipher("Ab")).toBe("Bc");
});

test("special characters", () => {
  expect(caesarCipher("??")).toBe("??");
});
