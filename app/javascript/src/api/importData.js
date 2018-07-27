import api, { setHeaders } from './init'
import { getValidToken } from "./token";

console.log("api.baseURL:", api.defaults.baseURL)

export function dataImports() {
  setHeaders(getValidToken())
  return api.post(`/api/v1/data_imports`)
  .then((res) => res.data)
}