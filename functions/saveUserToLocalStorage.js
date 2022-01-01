import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

export const saveUserToLocalStorage = (currentUser) => {
  const { _id } = currentUser;
  const currentUserItem = JSON.stringify(currentUser);
  localStorage.setItem(_id, currentUserItem);

  return _id;
};
