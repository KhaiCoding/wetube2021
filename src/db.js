import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/wetube2021", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const handleOpen = () => console.log("💚Connected to DB")
const handleError = (error) => console.log("💔DB Error", error)
db.on("error", (error) => handleError);
db.once("open", handleOpen);

