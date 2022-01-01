import { getUserFromLocalStorage } from "../../functions/getUserFromLocalStorage";

export const processAuth = (req, res) => {
  const { body } = req;
  const { nickName, password } = JSON.parse(JSON.stringify(body));

  if (nickName && password) {
    const userAutorized = getUserFromLocalStorage(nickName, password);

    const { isAutorized, user } = userAutorized;

    if (isAutorized) {
      const { _id } = user;

      res.redirect(`/item/public/${_id}`);
    } else {
      res.redirect("/user/account");
    }
  }
};
