export const confirmUser = (nick) => {
    let keys = Object.keys(sessionStorage);
  
    for (let someUserKey of keys) {
      let someUser = JSON.parse(sessionStorage.getItem(someUserKey));
      const { nickName } = someUser;
  
      return nick == nickName ? someUser._id : "";
    }
  };