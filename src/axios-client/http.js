import axios from "axios";

const API = axios.create({
    baseURL : 'URL here',
    headers : {
        "Content-Type":"application/json",
        Accept : "application/json"
    },  
})

export const getData = async () => await API.get('endpoint')
export const setData = async (payload) => await API.post('endpoint',payload)

