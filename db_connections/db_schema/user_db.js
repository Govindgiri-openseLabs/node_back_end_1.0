const { ObjectId, Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const user_schema=new mongoose.Schema(
    {
        first_name:{
            type:String,
        },
        last_name:{
            type:String,
        },
        email:{
            type:String,
            unique:true,
            required:true,
        },
        password:{
            type:String,
        },
        phone_number:{
           type:String,
        },
        address:{
             street:{
                      type:String,
                    },
             city:{
                     type:String,
                  },
            state:{
                type:String,
            },
            postal_code:{
                type:String,
            }
        },
       orders:[],
       reviews:[{
        product_id:{
            type:ObjectId,
        },
        rating:{
            type:Number,
        },
        comment:{
            type:String,
        },
       }],
      cart:[], 

    },
    {versionKey:false}
);

module.exports=mongoose.model("user_collection",user_schema);