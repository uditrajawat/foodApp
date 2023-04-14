const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://shockwave:Realme6i123@cluster0.krztzeg.mongodb.net/goFood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("MongoDB connected");

    const fetchedData = await mongoose.connection.db.collection("foodItems");
    const data = await fetchedData.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.foodItems = data;
    global.foodCategory = catData;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
