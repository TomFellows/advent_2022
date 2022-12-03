import fetch from 'node-fetch';

export const fetchPuzzleInput = async ({year, day}:{year:string, day: string}) => {
  const response = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers: {
      cookie: `session=${process.env.SESSION}`
    }
  });

  return response.text();
}
