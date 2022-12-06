import { fetchPuzzleInput } from "../utils/puzzle";

export const main = async () => {
  const data = (await fetchPuzzleInput({year: '2022', day: '5'})).split('\n');

  const rows = [];
  let numberOfRows: Array<string> = [];
  const moves = [];

  for (const entry of data) {
    if (entry.includes('[')) {
      rows.push(entry);
    } else if (entry.includes('move')) {
      moves.push(entry);
    } else if (entry.includes('1')) {
      numberOfRows = entry.split('').filter((item) => item !== ' ');
    }
  }

  const stacks = numberOfRows.reduce((acc: { [k: string]: Array<string>}, row: string) => {
    acc[row] = [];
    return acc;
  }, {});

  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (!char || char === ' ') {
        continue;
      }
      if (char === '[') {
        const value = row[i + 1];
        const index = (i + 1) - (3 * (i/4));
        stacks[index].push(value);
      }
    }
  }

  const stacks2: { [k: string]: Array<string>} = {};

  for (const [i, stack] of Object.values(stacks).entries()) {
    stacks2[i + 1] = [...stack];
  }

  for (const move of moves) {
    const [_, amount, __, from, ___, to] = move.split(' ');

    for (let i = 0; i < parseInt(amount); i++) {
      const value = stacks[from].shift() as string;
      stacks[to].unshift(value);
    }

    // Part 2

    const values = [];

    for (let i = 0; i < parseInt(amount); i++) {
      const value = stacks2[from].shift() as string;
      values.push(value);
    }

    stacks2[to] = values.concat(stacks2[to]);
  }

  const output = Object.values(stacks).reduce((acc: string, stack: Array<string>) => {
    return acc + stack[0];
  }, '');

  console.log('Part 1 :: ', output);

  // Part 2

  const output2 = Object.values(stacks2).reduce((acc: string, stack: Array<string>) => {
    return acc + stack[0];
  }, '');

  console.log('Part 2 :: ', output2);
};
