import mongoose  from "mongoose";
export const ConnectDB=async()=>{
    try {
        
       await  mongoose.connect("mongodb://localhost:27017/Ecommers");
       console.log("mongo db is connect")
    } catch (error) {
        console.log( "mongodb is notconnect")
    }
}
// export default ConnectDB