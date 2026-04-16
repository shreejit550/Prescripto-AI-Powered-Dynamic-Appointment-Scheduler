import mongoose from "mongoose"


const connectDB=async()=>{

    mongoose.connection.on('connected',()=>console.log('database Connected'))

   await mongoose.connect(`${process.env.MONGODB_URL}`)

    
}

export default connectDB
// minor update 6056

// minor update 3705
