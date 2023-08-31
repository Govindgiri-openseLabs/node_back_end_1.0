const mongoose=require("mongoose");

const product={
    product_name:{
        type:String,
    },
    brand:{
        type:String,
    },
    upc:{
        type:Number,
    }
    ,
    categories:{
        type:String,
    },
    price:{
       type:Number
    },
    rating:{
       type:Number
    },
    dimenstions:{
        length:{
          type:Number,
        },
        width:{
            type:Number,
        },
        height:{
            type:Number,
        },
        color:{
            type:String,
        },
        weight:{
            type:Number,
        }
    },
    color:{
        type:String,
    },
    model:{
        type:String,
    },
    warranty:{
        type:Number,
    },
    features:{
       type:String
    },
    manufacturer:{
        type:String
    },
    discount:{
        type:String
    },
    seller:{
        type:String
    },
    return_policy:{
        type:String
    },
    stock:{
        type:Number,
    },
    orders_id:[],
    seriel_no:{
        type:String,
    }
}

const product_schema=new mongoose.Schema(product,{versionKey:false}
);

module.exports=mongoose.model("product_collection",product_schema);