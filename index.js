// reqiure basic node modules

const express=require('express');
const mongoose=('mongoose');
const cors=require('cors');
const conn=require("./db_connections/mongo_db_conn/conn")
// cross origin resourse sharing from diffrent domain middleware (cors) 
const app=express();
app.use(cors());
app.use(express.json());

// connect data base
conn();

// https request from front end

app.use("/admin",require("./routes/admin_route/admin_auth.js"));
app.use('/user',require("./routes/user_route/user_auth.js"));
//app.use('/seller',require("./routes/seller_route/seller_auth.js"));
app.use('/product',require("./routes/product_route/product_crud_route"));
app.use('/product/filter',require("./routes/product_route/product_filter_route"));

// server connection

app.listen(8000,()=>{
    console.log("server listen at 8000");
})