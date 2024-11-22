const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

dotenv.config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", indexRouter);

//app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
    console.log(`TESTING EXPRESS APP ON PORT ${PORT}`);
})