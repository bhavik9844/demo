import axios from "axios";
import Config from "../Common/Config";

// login
const Logindata = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/logIn`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// getUserList
const getUserList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/getUserList`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// getUserList
const deleteUserList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/deleteUser`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// getCategoryList
const getCategoryList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/getCategoryList`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// updateCategory
const updateCategory = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/updateCategory`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// addCategory
const addCategory = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/addCategory`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// deleteCategory
const deleteCategory = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/deleteCategory`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

// getContactList
const getContactList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/getContactList`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

//updateVerifyStatus
const updateVerifyStatus = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/updateVerifyStatus`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

//getBookingList
const getBookingList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/getBookingList`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

//getPendingPaymentList
const getPendingPaymentList = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/getPendingPaymentList`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

//updatePendingPaymentStatus
const updatePendingPaymentStatus = async (data) => {
  var apiPromise = new Promise((resolve, reject) => {
    axios
      .post(`${Config.API_BASE_URL}/updatePendingPaymentStatus`, data, {
        headers: {
          key: Config.REACT_APP_API_KEY,
        },
      })
      .then(async (response) => {
        if (
          response.data.ResponseCode === 1 ||
          response.data.ResponseCode === "1"
        ) {
          return resolve(response.data);
        } else {
          return resolve(response.data);
        }
      })
      .catch((error) => {
        return reject(error);
      });
  });
  return await apiPromise;
};

export {
  Logindata,
  getUserList,
  deleteUserList,
  getCategoryList,
  addCategory,
  updateCategory,
  deleteCategory,
  getContactList,
  updateVerifyStatus,
  getBookingList,
  getPendingPaymentList,
  updatePendingPaymentStatus,
};
