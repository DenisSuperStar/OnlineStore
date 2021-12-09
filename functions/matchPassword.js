import { compare } from "bcrypt";

export const getMatchPassword = (userInfo, selfPassword) => {
  const { userNick, users } = userInfo;
  let matchPassword;

  users.forEach((user) => {
    if (userNick == user.nickName) {
      matchPassword = compare(selfPassword, user.password);
    }
  });

  return matchPassword;
};
