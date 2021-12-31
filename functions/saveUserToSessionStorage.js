'use strict';

const sessionStorage = require('sessionstorage-for-node');

export const saveUserToSessionStorage = (savedUser) => {
  const { _id } = savedUser;
  const currentUserItem = JSON.stringify(savedUser);
  sessionStorage.setItem(_id, currentUserItem);

  return _id;
};
