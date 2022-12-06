import { fetchPuzzleInput } from "../utils/puzzle";

export const main = async () => {

  const data = (await fetchPuzzleInput({year: '2022', day: '3'})).split('\n');
  data.pop();

  // Part 1

  const isUpperCase = (str: string): boolean => (str === str.toUpperCase());

  let points = 0;

  for (const entry of data) {

    const partOne = entry.substring(0, entry.length / 2);
    const partTwo = entry.substring(entry.length / 2);

    let common = '';

    for (let i = 0; i < partOne.length; i++) {
      if (!!common) {
        break;
      }

      if (partTwo.includes(partOne[i])) {
        common = partOne[i];
      }
    }

    if (!common) {
      console.log('no common letter found');
    } else {
      points += isUpperCase(common) ? common.charCodeAt(0) - 38 : common.charCodeAt(0) - 96;
    }
  }

  console.log('Part 1 points', points);

  // Part 2

  const dataCopy = [...data];
  const groupings = [];

  for (let i = 0; i < (data.length / 3); i++) {
    groupings.push([dataCopy[i], dataCopy[i + 1], dataCopy[i + 2]]);
    dataCopy.splice(0, 2);
  }

  let points2 = 0;

  for (const group of groupings) {
    const partOne = group[0];
    const partTwo = group[1];
    const partThree = group[2];

    let common = '';

    for (let i = 0; i < partOne.length; i++) {
      if (!!common) {
        break;
      }

      if (partTwo.includes(partOne[i]) && partThree.includes(partOne[i])) {
        common = partOne[i];
      }
    }

    if (!common) {
      console.log('no common letter found');
    } else {
      points2 += isUpperCase(common) ? common.charCodeAt(0) - 38 : common.charCodeAt(0) - 96;
    }
  }

  console.log('Part 2 points', points2);

};


