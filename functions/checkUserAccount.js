export const checkAccount = (body) => {
  const { firstName, lastName, nickName, password } = JSON.parse(
    JSON.stringify(body)
  );

  const isAccount =
    firstName && lastName && nickName && password ? true : false;

  return isAccount;
};
