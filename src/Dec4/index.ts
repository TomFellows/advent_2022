import { fetchPuzzleInput } from "../utils/puzzle";

export const main = async () => {

  const data = (await fetchPuzzleInput({year: '2022', day: '4'})).split('\n');
  data.pop();

  // Part 1

  let matches = 0;
  let matches2 = 0;

  for (const entry of data) {
    const [sectionA, sectionB] = entry.split(',');
    const [minA, maxA, minB, maxB] = [...sectionA.split('-'), ...sectionB.split('-')].map((n) => parseInt(n));

    if (minA <= minB && maxA >= maxB) {
      matches++;
    } else if (minB <= minA && maxB >= maxA) {
      matches++
    }

    // Part 2

    if (minA >= minB && minA <= maxB) {
      matches2++;
    } else if (maxA >= minB && maxA <= maxB) {
      matches2++;
    } else if (minB >= minA && minB <= maxA) {
      matches2++;
    } else if (maxB >= minA && maxB <= maxA) {
      matches2++;
    }
  }

  console.log('Part 1 matches', matches);
  console.log('Part 2 matches', matches2);
};



