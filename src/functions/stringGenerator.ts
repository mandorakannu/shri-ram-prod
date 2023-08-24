export const generatePassword = (name:string, number: number): string =>
  `${name}${number}`.slice(0, 8);

export const generateUniqueId = (name:string, number: number): string =>
  `${name}${number}`.slice(0, 8) + Math.floor(Math.random() * 1000);
