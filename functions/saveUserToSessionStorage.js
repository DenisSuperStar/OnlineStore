export const saveUserToSessionStorage = (savedUser) => {
  const { _id } = savedUser;
  const currentUserItem = JSON.stringify(savedUser);
  sessionStorage.setItem(_id, currentUserItem);

  return _id;
};
