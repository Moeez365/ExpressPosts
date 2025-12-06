import mongoose from "mongoose";

export const DataBase = async() =>{
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/ourDB");
    } catch (error) {
        console.log("Database connnection Error", error);
    }
}