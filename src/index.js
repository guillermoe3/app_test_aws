const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');

app.set("port", process.env.PORT || 3004);
app.listen(app.get("port"), () => console.log("Server start http://localhost:"+app.get("port")));


//CORS
app.use(cors());


//app routes
//main
const main = require("./routes/main");
app.use(main);


app.use((req, res, next) => {
    res.status(400).send("not-found");
})