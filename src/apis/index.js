import axios from 'axios'
import _ from 'lodash'
import baseUrl from './road'
import apis from './apis'
const methods = ["get", "post", "delete", "put", "patch"];
export const [get, post, del, put, patch] = methods.map(action => {
  return (val) => {
    let date = new Date(),
      url = reqRoad(action, val.road, val.params, val.query, val.version||'v1');
    return new Promise((resolve, reject)=>{
      axios({
        method: action,
        url,
        data: val.data
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject({
          code: _.get(err, 'response.status'),
          response: _.get(err, 'response.data')
        })
      })
    }) 
  }

})

const parseUrl = (url, params) => {
  return (
    url &&
    url.replace(/\{(\w+)\}/g, (m, n) => {
      return params[n];
    })
  )
}
export const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
const reqRoad = (method, road, params, query, version) => {
  if (method === 'get' && query) {
    return baseUrl[version] + parseUrl(apis[road], params) + '?' + serialize(query)
  } else {
    return baseUrl[version] + parseUrl(apis[road], params)
  }
}
