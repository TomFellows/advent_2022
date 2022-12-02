import { raw } from "./rawData";

const DRAW = 'draw';
const LOSS = 'loss';
const WIN = 'win';

interface Points {
  [key: string]: number;
}

const points: Points = {
  X: 1,
  Y: 2,
  Z: 3
};

const outcomePoints: Points = {
  loss: 0,
  draw: 3,
  win: 6
}

interface Outcomes {
  [key: string]: string;
}

const outcomes: Outcomes = {
  AX: DRAW,
  AY: WIN,
  AZ: LOSS,
  BX: LOSS,
  BY: DRAW,
  BZ: WIN,
  CX: WIN,
  CY: LOSS,
  CZ: DRAW
}

const calculateRoundPoints = (roundData: string): number => {
  const [opponent, player] = roundData.split(' ');
  const playerPoints = points[player];
  const roundPoints =  outcomePoints[outcomes[opponent + player]];

  return playerPoints + roundPoints;
}

const getPoints = (): number => {
  const points = raw.reduce((acc: number, data: string) => {
    return acc + calculateRoundPoints(data)
  }, 0);

  return points;
}

console.log(getPoints());

// PART 2

const realPoints: Points = {
  AX: 3 + outcomePoints[LOSS],
  AY: 1 + outcomePoints[DRAW],
  AZ: 2 + outcomePoints[WIN],
  BX: 1 + outcomePoints[LOSS],
  BY: 2 + outcomePoints[DRAW],
  BZ: 3 + outcomePoints[WIN],
  CX: 2 + outcomePoints[LOSS],
  CY: 3 + outcomePoints[DRAW],
  CZ: 1 + outcomePoints[WIN]
}

const getRealPoints = (): number => {
  const points = raw.reduce((acc: number, data: string) => {
    const [opponent, result] = data.split(' ');
    return acc + realPoints[opponent + result];
  }, 0);

  return points;
}

console.log("Final Outcome :: ", getRealPoints());
