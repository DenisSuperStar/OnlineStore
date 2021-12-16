import { v4 } from "public-ip";

export const getPublicIp = async () => await v4();