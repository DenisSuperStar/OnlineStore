import { v4 } from "uuid";
import bcrypt from "bcrypt";

export const createUser = async (body, saveUser) => {
  const { firstName, lastName, nickName, password } = JSON.parse(
    JSON.stringify(body)
  );
  const salt = 10;

  saveUser._id = v4();
  saveUser.firstName = firstName;
  saveUser.lastName = lastName;
  saveUser.nickName = nickName;
  saveUser.password = await bcrypt.hash(password, salt);

  return saveUser;
};
