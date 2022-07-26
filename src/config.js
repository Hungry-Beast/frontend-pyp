import axios from "axios";

export const prodUrl='https://pypbackendserver.herokuapp.com'
export const localUrl='http://localhost:27017'
const baseApi=axios.create({
    baseURL:prodUrl
    // baseURL:localUrl
})
export default baseApi