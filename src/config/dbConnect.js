import mongoose from "mongoose";

mongoose.connect("mongodb+srv://[username]:[password]@cluster0.mmrzvdp.mongodb.net/[database][?options]");

let db = mongoose.connection;

export default db