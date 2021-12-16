import dotenv from "dotenv";

const settings = dotenv.config();

export const getParsedEnv = () => settings.parsed;
