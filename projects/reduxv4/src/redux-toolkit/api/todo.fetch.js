import axios from "axios"

export const getTodo = ()=>{
    return axios.get("http://localhost:3000/posts").then((res)=>{
       return res.data
    })
}

