import Axios from "axios";
export const Instance =Axios.create({
    baseURL:"http://localhost:2020",
    data:{}
})