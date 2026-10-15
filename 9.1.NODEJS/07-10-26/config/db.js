import mongoose from 'mongoose'

const connectDB = async() => {

    try{

        let res = await mongoose.connect(process.env.MONGODB_URL)

        console.log("MOngoDb Connected !!", res.connection.host);
        

    }catch(err){
        
        
        console.log(" MongoDb Eroor connection" ,err);
        
    }
}


export default connectDB;   