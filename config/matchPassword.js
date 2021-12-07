const bcrypt = require("bcrypt");

module.exports.getMatchPassword = (userInfo, selfPassword) => {
  const { userNick, users } = userInfo;
  let matchPassword;

  users.forEach((user) => {
    if (userNick == user.nickName) {
      matchPassword = bcrypt.compare(selfPassword, user.password);
    }
  });

  return matchPassword;
};
