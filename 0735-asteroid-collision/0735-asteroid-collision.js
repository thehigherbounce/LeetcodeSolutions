/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const currAsteroid = asteroids[i];

    if (currAsteroid > 0) {
      stack.push(currAsteroid);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(currAsteroid)) {
        stack.pop();
      }

      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(currAsteroid);
      } else if (stack[stack.length - 1] === Math.abs(currAsteroid)) {
        stack.pop();
      }
    }
  }

  return stack;
};