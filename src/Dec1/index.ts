import { raw } from './rawData';

const getGroups = () => {
  return raw.split(',,');
}

const getIndividualValues = (groups: Array<string>): Array<number> => {
  const totals = groups.map((group) => {
    const values = group.split(',');
    let total = 0;
    for (let i = 0; i < values.length; i++) {
      total += parseInt(values[i]);
    }
    return total;
  });

  return totals;
}

const getTopThree = (values: Array<number>): Array<number> => {
  const sorted = values.sort((a, b) => b - a);
  return sorted.slice(0, 3);
}

const sumTopThree = (values: Array<number>): number => {
  return values[0] + values[1] + values[2];
}

console.log(sumTopThree(getTopThree(getIndividualValues(getGroups()))));

