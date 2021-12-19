import fs from "fs";
import bcrypt from "bcrypt";

export const saveUser = async (body, someUser, someUserId, userDb, userDbPath) => {
  const { firstName, lastName, nickName, password } = JSON.parse(
    JSON.stringify(body)
  );
  const salt = 10;

  someUser._id = someUserId;
  someUser.firstName = firstName;
  someUser.lastName = lastName;
  someUser.nickName = nickName;
  someUser.password = await bcrypt.hash(password, salt);

  userDb.push(someUser);

  const convertUsersToFile = JSON.stringify(userDb, null, 4);
  fs.writeFileSync(userDbPath, convertUsersToFile);
};
