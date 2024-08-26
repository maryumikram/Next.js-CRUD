import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("Error in connecting DataBase => ", error);
  }
};

export default connectMongoDB;
