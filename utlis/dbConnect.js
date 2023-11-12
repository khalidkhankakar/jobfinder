import mongoose from 'mongoose';

let isConnected = false; // track the connection

const dbcon = async ()=>{
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://khalidkakar:4zp0n6lc9JqHGMWD@cluster0.llnnhjr.mongodb.net/?retryWrites=true&w=majority/job-finder", {
      dbName: "jobfinder",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
export default dbcon;