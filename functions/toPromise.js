import { readFile } from "fs";

export const readFileToPromise = (dirFile) => {
  return new Promise((res, rej) => {
    readFile(dirFile, "utf-8", (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
};
