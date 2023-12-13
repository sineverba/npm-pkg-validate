import { validate } from "../index";

describe("Test validate", () => {
  it("Should throws error if missing param", () => {
    /**
     * Suppress the error
     */
    // @ts-expect-error
    expect(() => validate()).toThrow(Error);
  });
  it("Should return true if input is a valid email", () => {
    const validEmail = "info@example.com";
    const result = validate(validEmail);
    expect(result).toBe(true);
  });

  it("Should return false if input is not a valid email", () => {
    const invalidEmail = "infoexample.com";
    const result = validate(invalidEmail);
    expect(result).toBe(false);
  });

  it("Should return false if domains has only one char", () => {
    const invalidEmail = "info@example.a";
    const result = validate(invalidEmail);
    expect(result).toBe(false);
  });

  it("Should accept an external regex to accept alphanumeric and underscore", () => {
    const inputString = "qwerty1234_";
    const externalRegex = /^[a-zA-Z0-9_]+$/;
    const result = validate(inputString, true, externalRegex);
    expect(result).toBe(true);
  });

  it("Should accept an external regex to validate alphanumeric and underscore", () => {
    const inputString = "qwerty1234_-";
    const externalRegex = /^[a-zA-Z0-9_]+$/;
    const result = validate(inputString, true, externalRegex);
    expect(result).toBe(false);
  });
});
