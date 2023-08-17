import jwt from "jsonwebtoken";

const key = process.env.SECRET_KEY;

export const tokenGenerator = (id: string, name: string): string => {
  if (!key) throw new Error("No secret key found");
  return jwt.sign({ id, name }, key, {
    expiresIn: "10d",
  });
};
