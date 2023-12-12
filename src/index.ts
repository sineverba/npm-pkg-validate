/**
 *
 * @param String inputString the input string to validate
 * @returns true if string is invalid, otherwise false
 */
export const validate = (inputString: string) => {
  if (!inputString) {
    throw new Error("Missing inputString");
  }
  const test = /^\S+@\S+\.\S{2,}/.exec(String(inputString).toLowerCase());
  if (test && test.length > 0) {
    return true;
  }
  return false;
};
