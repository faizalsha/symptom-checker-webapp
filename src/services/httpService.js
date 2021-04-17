import { BACKEND_PAGE_NOT_FOUND } from "../constants/commonConstants";

const AUTHORIZTION = "Authorization";
const CONTENT_TYPE = "content-type";
const APPLICATION_JSON = "application/json";
const HTTP_GET = "GET";
const HTTP_POST = "POST";
const HTTP_DELETE = "DELETE";
const HTTP_PUT = "PUT";

/**
 * Changing fetch() behaviour to reject client errors.
 */
const constantMock = window.fetch;
window.fetch = function () {
  return new Promise((resolve, reject) => {
    constantMock
      .apply(this, arguments)
      .then((response) => {
        if (response && response.status >= 400 && response.status < 500) {
          // Rejecting explicitly when repsonse code is between [400, 500)
          if (response.status === 404) {
            reject(BACKEND_PAGE_NOT_FOUND)
          } else {
            response.json().then(errorBody => reject(errorBody))
          }
        } else {
          if (response.status === 204)
            resolve("successfully deleted")
          else
            resolve(response.json());
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getHeader = (contentType = APPLICATION_JSON, token = null) => {
  let header = new Headers();
  header.append(CONTENT_TYPE, contentType);
  if (token) {
    header.append(AUTHORIZTION, getFormattedToken(token))
  }
  return header;
}

/**
 * Formatting token for request header
 * @param {string} token
 */
const getFormattedToken = (token) => {
  return `Token ${token}`;
};

/**
 * Get request without authorization
 * @param {string} url
 */
const getResponse = (url) => {
  return fetch(url);
};

/**
 * Get request with authorization
 * @param {string} url
 * @param {string} token
 */
const getAuthResponse = (url, token) => {
  const header = getHeader(APPLICATION_JSON, token)
  return fetch(url, {
    method: HTTP_GET,
    headers: header,
  });
};

/**
 * Post request without authorization
 * @param {string} url
 * @param {object} data
 */
const postData = (url, data) => {
  const header = getHeader();
  return fetch(url, {
    method: HTTP_POST,
    headers: header,
    body: JSON.stringify(data),
  });
};

/**
 * Post request with authorization
 * @param {string} url
 * @param {object} data
 * @param {string} token
 */
const postAuthData = (url, data, token) => {
  const header = getHeader(APPLICATION_JSON, token);
  return fetch(url, {
    method: HTTP_POST,
    headers: header,
    body: JSON.stringify(data),
  });
};

/**
 * Put request with `FormData` (i.e. posting image) 
 * @param {string} url 
 * @param {object} data 
 * @param {sting} token 
 * @returns 
 */
const putAuthFormData = (url, data, token) => {
  return fetch(url, {
    method: HTTP_PUT,
    headers: {
      [AUTHORIZTION]: getFormattedToken(token),
    },
    body: data,
  })
}

/**
 * Post request with `FormData` (i.e. posting image) 
 * @param {string} url 
 * @param {object} data 
 * @param {sting} token 
 * @returns 
 */
const postAuthFormData = (url, data, token) => {
  return fetch(url, {
    method: HTTP_POST,
    headers: {
      [AUTHORIZTION]: getFormattedToken(token),
    },
    body: data,
  })
}


const deleteAuthRequest = (url, token) => {
  const header = getHeader(APPLICATION_JSON, token);
  return fetch(url, {
    method: HTTP_DELETE,
    headers: header,
  });
};

const putAuthRequest = (url, data, token) => {
  const header = getHeader(APPLICATION_JSON, token);
  return fetch(url, {
    method: HTTP_PUT,
    headers: header,
    body: JSON.stringify(data),
  });
};

export {
  getResponse,
  getAuthResponse,
  postData,
  postAuthData,
  deleteAuthRequest,
  putAuthRequest,
  putAuthFormData,
  postAuthFormData,
};
