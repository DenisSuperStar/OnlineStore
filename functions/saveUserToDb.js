import fs from "fs";

export const saveUser = (createdUser, userDb, userDbPath) => {
  userDb.push(createdUser);

  const convertUsersToFile = JSON.stringify(userDb, null, 4);
  fs.writeFileSync(userDbPath, convertUsersToFile);
};
