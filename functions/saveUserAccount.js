import fs from "fs";

export const saveUser = (body, someUser, someUserId, userDb, userDbPath) => {
  const { firstName, lastName, nickName } = JSON.parse(JSON.stringify(body));

  someUser._id = someUserId;
  someUser.firstName = firstName;
  someUser.lastName = lastName;
  someUser.nickName = nickName;

  userDb.push(someUser);

  const convertUsersToFile = JSON.stringify(userDb, null, 4);
  fs.writeFileSync(userDbPath, convertUsersToFile);
};
