import { genSalt, hashSync } from "bcryptjs";

export const hashing = async (password: string): Promise<string> => {
  const salt = await genSalt(10);
  return hashSync(password, salt);
};
