import { useState, useEffect } from 'react'

function useQuery(url, query, variables = {}, initialState = {}, options = {}) {
  let defaultOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...this.state }),,
  }

  let [fetchData, fetchState] = useState(initialState)
  options = { ...defaultOptions, ...options }

  let fetchObj = {
    headers: options.headers,
  }
  fetchObj = options

  useEffect(function() {
    fetch(url, fetchObj)
      .then(function(resp) {
        if (resp.ok) {
          return resp
        }
        throw new Error(resp)
      })
      .then(function(resp) {
        return resp.json()
      })
      .then(function(res) {
        console.log('res json')
        let obj
        obj = {
          response: res.data,
          success: true,
        }
        fetchState(obj)
      })
      .catch(function(err) {
        fetchState({ success: false, error: err })
      })
  }, options.runWhenSpecificPropsChanges)
  console.log('fetchData', fetchData)
  let { success, error, response } = { ...fetchData }
  return {
    data: response || initialState,
    success,
    error,
  }
}

export default useQuery
