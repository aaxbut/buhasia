import http from 'http';
import https from 'https';

const config = {};

// -------------------------------------------------------
// Common config values should go here
// =======================================================
const common = {
  axios: {

    // 60 sec timeout
    timeout: 60000,

    // keepAlive pools and reuses TCP connections,
    // so it's faster
    httpAgent: new http.Agent({
      keepAlive: true,
    }),
    httpsAgent: new https.Agent({
      keepAlive: true,
    }),

    // follow up to 10 HTTP 3xx redirects
    maxRedirects: 10,

    // cap the maximum content length we'll accept
    // to 50MBs, just in case
    maxContentLength: 50 * 1000 * 1000,

    /**
     * Set default BASE API URL Prefix
     */
    get baseURL() {
      return config.api.host;
    },
  },
};

// -------------------------------------------------------
// Local config
// =======================================================
const local = Object.assign({}, common, { // eslint-disable-line no-unused-vars
  api: {
    host: 'http://localhost:8000/api/v1/',
  },
});

// -------------------------------------------------------
// Development config
// =======================================================
const development = Object.assign({}, common, {
  api: {
    host: 'https://chase.saritasa-hosting.com/api/',
  },
});

// -------------------------------------------------------
// Staging config
// =======================================================
const staging = Object.assign({}, common, {
  api: {
    host: 'http://staging.com/api/v1/',
  },
});

// -------------------------------------------------------
// Production config
// =======================================================
const production = Object.assign({}, common, {
  api: {
    host: 'https://homes-api.trivver.com/api/',
  },
});

/**
 * Returns the configuration based on domain
 * @returns {object}
 */
function getConfig() {
  switch (window.location.hostname) {
    case 'localhost': // fallthrough

    case '127.0.0.1':
      return local;

    case 'matterport-admin.saritasa-hosting.com':
      return development;

    case 'staging.yourdomain.com':
      return staging;

    case 'homes.trivver.com':
      return production;

    default:
      throw new Error(`Unknown environment: ${window.location.hostname}`);
  }
}

/**
 * Configuration object for the application
 * @property {Object} api - configuration for API domain/prefix
 * @property {string} api.host - API domain with prefix uri
 */
Object.assign(config, getConfig());

/**
 * @summary Returns the configuration parameter.
 *
 * @author Dmitry Semenov
 *
 * @param {str} key - config's key
 */
function getItem(key) {
  return key in config ? config[key] : null;
}

/**
 * @summary Sets the configuration parameter.
 *
 * @author Dmitry Semenov
 *
 * @param {str} key - config's key
 * @param {str|number|boolean} value - config's key value
 */
function setItem(key, value) {
  config[key] = value;
}

Object.assign(config, {
  getItem,
  setItem,
});

export default config;
