import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should always return a number", () => {
    const number = "10";
    const result = transformToNumber(number);
    expect(result).toBeTypeOf("number");
  });

  it("should not return a string", () => {
    const number = "10";
    const result = transformToNumber(number);
    expect(result).not.toBeTypeOf("string");
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });
});
