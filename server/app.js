const express = require("express");
const app = express();
const routes = require("./routes");
const port = 9001;
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require("cors")

app.use(cors());
app.set("views", path.join(__dirname, "src"));
app.set("view engine", "jade");
app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.listen(port, () => {
    console.log(`Server online ! Listening on port ${port}`)
})

module.exports = app;