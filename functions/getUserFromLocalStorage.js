import bcrypt from "bcrypt";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

export const getUserFromLocalStorage = (nick, pass) => {
  for (let j = 0; j < localStorage.length; j++) {
    let userKey = localStorage.key(j);
    var user = JSON.parse(localStorage.getItem(userKey));
    var isAutorized =
      user.nickName == nick && bcrypt.compare(pass, user.password)
        ? true
        : false;

    if (isAutorized) break;
  }

  return user;
};
