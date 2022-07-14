const USER = "user";
export const localStorageService = {
  setUserInfo: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem(USER, dataJson);
  },
  getUserInfo: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
  removeUserInfo: () => {
    localStorage.removeItem(USER);
  },
};
