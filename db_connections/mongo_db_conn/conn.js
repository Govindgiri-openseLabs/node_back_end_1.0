const mongoose=require("mongoose");
const url = "mongodb+srv://govind_giri:Govind%401234@cluster0.tivfshz.mongodb.net/master_data_base";

const conn=async()=>{
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected");
}).catch((error)=>{
    console.log("db connection failed",error);
})
}

module.exports=conn;
