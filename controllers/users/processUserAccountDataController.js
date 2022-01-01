import { checkAccount } from "../../functions/checkUserAccount";
import { createUser } from "../../functions/createNewUser";
import { saveUserToLocalStorage } from "../../functions/saveUserToLocalStorage";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

export const processAccount = async (req, res) => {
  const { body } = req;

  if (checkAccount(body)) {
    for (let i = 0; i < localStorage.length; i++) {
      let userKey = localStorage.key(i);
      let user = JSON.parse(localStorage.getItem(userKey));
      var isUserSearched =
        user.firstName == body.firstName && user.lastName == body.lastName;

      if (isUserSearched) break;
    }

    if (!isUserSearched) {
      let createdUser = new Object();
      let currentUser = await createUser(body, createdUser);

      saveUserToLocalStorage(currentUser);

      res.redirect("/item/public");
    } else {
      res.redirect("/user/auth");
    }
  } else {
    res.redirect("/user/account");
  }
};
