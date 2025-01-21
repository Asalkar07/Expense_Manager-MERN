const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./conifg/connectDB.js");
const path = require("path");

// Config dot env file
dotenv.config();

// connect DB
connectDB();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute.js"));

//transcation routes
app.use("/api/v1/transcations", require("./routes/transcationRoute.js"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
