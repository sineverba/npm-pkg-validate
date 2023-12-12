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
    var validEmail = "info@example.com";
    var result = validate(validEmail);
    expect(result).toBe(true);
  });

  it("Should return false if input is not a valid email", () => {
    var invalidEmail = "infoexample.com";
    var result = validate(invalidEmail);
    expect(result).toBe(false);
  });

  it("Should return false if domains has only one char", () => {
    var invalidEmail = "info@example.a";
    var result = validate(invalidEmail);
    expect(result).toBe(false);
  });
});
