/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  const discoveryYears = data.asteroids
    .filter((asteroid) => asteroid.discoveryYear)
    .map((asteroid) => asteroid.discoveryYear)
    .reduce((acc, year) => {
      const found = acc.find((obj) => obj.year === year);
      if (found) {
        found.count += 1;
      } else {
        acc.push({ year, count: 1 });
      }
      return acc;
    }, []);

  return maxBy(discoveryYears, (obj) => obj.count).year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
