import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[],
        isLoading:false,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase()
    }
})

export default todoSlice.reducer