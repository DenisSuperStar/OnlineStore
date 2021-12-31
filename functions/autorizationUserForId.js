'use strict';

const sessionStorage = require('sessionstorage-for-node');

export const autorizeUserForId = (userId) => {
  for (let j = 0; j < sessionStorage.length; j++) {
    let userKey = sessionStorage.key(j);

    return userKey == userId ? true : false;
  }
};
