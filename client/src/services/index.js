import Axios from "axios";
export const Instance =Axios.create({
    baseURL:"http://192.168.99.100:2020",
    data:{}
})