export const getUserData = (dataUser, userNick) => {
  const users = JSON.parse(dataUser);
  let searchedUser;

  users.forEach((user) => {
    if (userNick == user.nickName) {
      searchedUser = user.nickName;
    }
  });

  return { userNick: searchedUser, users };
};
