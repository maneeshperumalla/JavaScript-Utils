/**
 * Returns the Value/Response based on the condition
 * @param {Boolean} Condition - Condition to check true or false
 * @param {response1} any - Returns if condition is True
 * @param {response2} any - Returns if condition is False
 */

export const ternaryCondition = (condition, response1, response2) => {
  return condition ? response1 : response2;
};

export const multipleTernaryConditions = () => {
  return condition1
    ? response1
    : condition2
    ? response2
    : condition3
    ? response3
    : response4;
};
