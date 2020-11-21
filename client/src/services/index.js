import Axios from "axios";
export const Instance =Axios.create({
    baseURL:"https://medium-movies-trending-server.herokuapp.com",
    data:{}
})