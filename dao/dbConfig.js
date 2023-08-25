import mongoose from "mongoose"

const URI="mongodb+srv://ManuelD:proof123@cluster0.dmkcgys.mongodb.net/?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")

