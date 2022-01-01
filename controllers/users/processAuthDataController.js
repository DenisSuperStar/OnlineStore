import { getUserFromLocalStorage } from "../../functions/getUserFromLocalStorage";
import { autorizeUserForId } from "../../functions/autorizationUserForId";

export const processAuth = (req, res) => {
  const { body } = req;
  const { nickName, password } = JSON.parse(JSON.stringify(body));

  if (nickName && password) {
    const searchedUserAutorize = getUserFromLocalStorage(nickName, password);
    const { _id } = searchedUserAutorize;

    if (autorizeUserForId(_id)) {
      res.setHeader("Set-cookie", res.cookie("_id", _id), {
        maxAge: 3600 * 24,
        httpOnly: true,
        signed: true,
      });
      res.redirect("/item/public");
    } else {
      res.redirect("/user/account");
    }
  }
};
