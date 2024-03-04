import { createSlice } from "@reduxjs/toolkit";

import { getTodo } from "../api/todo.fetch";

const todoSlice = createSlice({
    name:"todoSlice",
    initialState:{
        todos:[],
        isloading:false
    },
    extraReducers:(builder)=>{

        //get data
        builder.addCase(getTodo.pending,(state,action)=>{
            state.isloading=true
        }),
        builder.addCase(getTodo.fulfilled,(state,action)=>{
            state.todos = action.payload
            state.isloading=false
        }),
        builder.addCase(getTodo.rejected,(state,action)=>{
            state.isloading=false
        })
    }

})

export default todoSlice.reducer