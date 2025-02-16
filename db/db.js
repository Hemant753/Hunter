import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connect;