/**
 * Imports
 */

import saneFetch from 'sane-fetch'

const FETCH = '@koax/fetch/FETCH'

/**
 * Fetch effect drive
 * @return {Function} koax middleware
 */

function fetchEffect () {
  return (action, next) => action.type === FETCH
    ? saneFetch(action.payload.url, action.payload.params)
    : next()
}

/**
 * Fetch action creator
 * @param  {String} url
 * @param  {Object} params
 * @return {Object}        action
 */

function fetch (url = '', params = {}) {
  return {
    type: FETCH,
    payload: {
      url,
      params
    }
  }
}

/**
 * Exports
 */

export {fetch, fetchEffect, FETCH as fetchType}
