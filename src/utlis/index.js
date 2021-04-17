import { TOKEN_KEY } from '../constants/commonConstants';
import { toast } from 'react-toastify';
/**
 * Helper function to save key value pair to localStorage
 * @param {string} key
 * @param {string} value
 */
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * Get the value for a given key from the localStorage
 * return null if no key exist in localStoreage
 * @param {string} key
 */
const getStorageValueOrNull = (key) => {
  return localStorage.getItem(key);
};

/**
 * Delete the key value pair from localStorage
 * @param {string} key
 */
const deleteStorageValue = (key) => {
  localStorage.removeItem(key);
};

/**
 * Utility method for removing null key from an object
 * @param {Object} obj
 */
const removeNullProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    let hasProperties = value && Object.keys(value).length > 0;
    if (value === null || value.length == 0) {
      delete obj[key];
    } else if (typeof value !== 'string' && hasProperties) {
      removeNullProperties(value);
    }
  });
  return obj;
};

const validatePassword = (password) => {
  if (password.length < 8) return false;
  // We can have other checks also like common password checks
  return true;
};

/**
 * Get current user token from the local storage
 */
const getCurrentUserToken = () => {
  return getStorageValueOrNull(TOKEN_KEY);
};

const convertStringToArray = (obj) => {
  return typeof obj === 'string' ? Array(obj) : obj;
};

/**
 * display toast message
 * parse all key value pair and display individual toast
 * @param {object} obj
 */
const displayErrors = (obj) => {
  if (obj) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'string') toast(value);
      else toast(`${key}: ${value.join()}`);
    });
  }
};

const jsonToCronFormat = (json) => {
  let cron = ''

  cron += '0 ';
  cron += (('hour' in json) ? json.hour + '' : '*') + ' ';
  cron += (('day_of_month' in json) ? json.day_of_month : '*') + ' ';
  cron += (('month_of_year' in json) ? json.month_of_year : '*') + ' ';
  cron += (('day_of_week' in json) ? json.day_of_week : '*');

  return cron
}

const indexToStatusMap = [
  'SENT',
  'SENT FAILED',
  'ACCEPTED',
  'CANCELLED',
  'PENDING',
];

const getStatus = (index) => {
  return indexToStatusMap[index];
};

export {
  saveToLocalStorage,
  getStorageValueOrNull,
  deleteStorageValue,
  removeNullProperties,
  validatePassword,
  getCurrentUserToken,
  convertStringToArray,
  displayErrors,
  getStatus,
  jsonToCronFormat,
};
