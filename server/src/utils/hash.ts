import crypto from "crypto";

export const generateRandomHash = (length = 6) => {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString("hex") // Convert to hexadecimal format
		.slice(0, length); // Return required number of characters
};
