import mongoose from "mongoose";

const connectDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(data => {
        console.log(`MongoDB Connected with server: ${data.connection.host}`);
    });
}

export default connectDatabase;