import fs from "fs";
import bcrypt from "bcrypt";

export const savePassword = async (
  someUserId,
  pass,
  mix,
  userDb,
  userDbPath
) => {
  await bcrypt.hash(pass, mix).then((hash) => {
    let searchUser = userDb.find((user) => user._id == someUserId);
    console.log(searchUser);

    searchUser.password = hash;

    const convertUsersToFile = JSON.stringify(userDb, null, 4);
    fs.writeFileSync(userDbPath, convertUsersToFile);
  });
};
