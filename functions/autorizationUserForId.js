import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

export const autorizeUserForId = (userId) => {
  for (let j = 0; j < localStorage.length; j++) {
    let userKey = localStorage.key(j);

    return userKey == userId ? true : false;
  }
};
