import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("add()", () => {
  it("should summarize all numbers values in an array", () => {
    //Arrange
    const numbers = [1, 2, 3];

    //Act
    const result = add(numbers);

    //Assert
    const expectedResult = numbers.reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );

    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if a least one invalid is provided", () => {
    const inputs = ["invalid", 1, 2];
    const result = add(inputs);
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];
    const result = add(numbers);

    const expectedResult = numbers.reduce(
      (prevValue, currValue) => +prevValue + +currValue,
      0
    );

    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const result = () => {
      add();
    };
    expect(result).toThrow();
  });

  it("should throw an errror if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const result = () => {
      add(num1, num2);

      expect(result).toThrow();
    };
  });
});
