import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodo = createAsyncThunk("getTodo",async()=>{
    let data = await fetch("http://localhost:3030/data") 
    return data.json()
})
export const postTodo = createAsyncThunk("posttodo",async(user)=>{
   return axios.post("http://localhost:3030/data",user).then((res)=>{
            console.log(res.data);
    })
})

const todoSlice = createSlice({
    name:"todoSlice",
    initialState:{
        todos:[],
        loading:false
    },
    extraReducers:(buildder)=>{
        buildder.addCase(getTodo.pending,(state,action)=>{
            state.loading= true
        }),
        buildder.addCase(getTodo.fulfilled,(state,action)=>{
            state.todos=action.payload
            state.loading=false
        }),
        buildder.addCase(getTodo.rejected,(state,action)=>{
            state.loading=false
        }),


        buildder.addCase(postTodo.pending,(state,action)=>{
            state.loading= true
        }),
        buildder.addCase(postTodo.fulfilled,(state,action)=>{
            state.loading= true
            state.todos=state.todos.concat(action.payload)
        }),
        buildder.addCase(postTodo.rejected,(state,action)=>{
            state.loading= true
        })
    }
})
export default todoSlice.reducer