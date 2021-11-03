const express = require('express');
require('dotenv').config();
const app = express();
const userRoutes = require("./config/api/users/user.routes");

app.use(express.json());

app.use("/api/users",userRoutes);
app.listen(process.env.APP_PORT,()=>{
    console.log("servidor na porta", process.env.APP_PORT);
})