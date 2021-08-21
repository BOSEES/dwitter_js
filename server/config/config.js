import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`key ${key} is undefined`);
  }
}

export const config = {
  jwt: {
    secretKey: parseInt(required("JWT_SECRET")),
    expiresSec: parseInt(required("JWT_EXPRIERES_SEC", 86400))
  },
  bcrypt: {
    saltRound: parseInt(required("BCRYPT_SALT_ROUNDS"))
  },
  port: process.env.PORT
}