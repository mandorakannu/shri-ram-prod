export const generatePassword = (): string =>
  Math.random().toString(36).slice(-8);

export const generateUniqueId = (): string =>
  Math.random().toString(20).slice(-8);
