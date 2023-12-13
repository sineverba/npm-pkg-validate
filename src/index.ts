/**
 *
 * @param String inputString the input string to validate
 * @param boolean uses an external regular expression (if any)
 * @param String the external regex (if any)
 * @returns true if string is invalid, otherwise false
 */
export const validate = (
  inputString: string,
  useExternalRegex: boolean = false,
  externalRegex: any = ""
) => {
  if (!inputString) {
    throw new Error("Missing inputString");
  }
  let regularExpression = /^\S+@\S+\.\S{2,}/;
  if (useExternalRegex) {
    regularExpression = externalRegex;
  }
  const test = regularExpression.exec(String(inputString).toLowerCase());
  if (test && test.length > 0) {
    return true;
  }
  return false;
};
