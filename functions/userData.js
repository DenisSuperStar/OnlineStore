export const getUserData = (dataUser, userNick) => {
  const users = JSON.parse(dataUser);
  let searchUser = users.find((user) => user.nickName == userNick);

  return { userNick: searchUser.nickName, users };
};