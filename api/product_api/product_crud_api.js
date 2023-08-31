const product_data=require("../../db_connections/db_schema/product_db");
const get_product_by_upc_api=async(upc)=>{
    try{   
           const data=await product_data.findOne({"upc":upc});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

const add_product_api=async(data)=>{
    try{  
            const Data=await product_data.create(data);
            return Data;
    }
    catch(error){
        return 0;
    }
}

const update_product_api=async(data)=>{
    try{    
            const Data=await admin_data.updateOne({"email":data.email},{$set:{"name":data.name,"password":data.password}});
            return Data;
    }
    catch(error){
        return 0;
    }
}
const delete_product_api=async(email)=>{
    try{  
            const Data=await admin_data.deleteOne({"email":email});
            return Data;
    }
    catch(error){
        return 0;
    }
}
module.exports= {add_product_api,get_product_by_upc_api,update_product_api,delete_product_api};