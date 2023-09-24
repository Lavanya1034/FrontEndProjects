import {createSlice} from '@reduxjs/toolkit';
import tasksData from '../data/tasks.json';

const initialState = [...tasksData];
export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTasks:(action)=>{
            return action.payload;
        },
        addTask:(state,action)=>{
            return [...state,action.payload];
        },
        deleteTask:(state,action)=>{
            return state.filter((task)=>task.id !== action.payload);
        },
        updateTask:(state,action)=>{
            return state.map((task)=>task.id === action.payload.id?{...task,...action.payload}:task);
        }
    }


})

export const {addTask,addTasks,updateTask,deleteTask}= tasksSlice.actions;

export default tasksSlice.reducer;