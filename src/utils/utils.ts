const crypt = require("crypto");

export const encrypt = (message: string): string => {
  return crypt.createHash("sha256").update(message).digest("hex");
};
