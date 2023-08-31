const product_data=require("../../db_connections/db_schema/product_db");
const get_product_by_name_api=async(product_name)=>{
    try{   
           const data=await product_data.find({"product_name":product_name});
           if(data.length) return data;
           return 0;
    }
    catch(error)
    { 
        return 0;
    }
}
const get_product_by_upc_api=async(upc)=>{
    try{   
           const data=await product_data.find({"upc":upc});
           if(data.length) return data;
           return 0;
    }
    catch(error)
    { 
        return 0;
    }
}

const get_product_by_price_api=async(price)=>{
    try{   
           const data=await product_data.find({"price":price});
           if(data.length) return data;
           return 0;
    }
    catch(error)
    { 
        return 0;
    }
}

const get_product_by_brand_api=async(brand)=>{
    try{   
           const data=await product_data.find({"brand":brand});
           if(data.length) return data;
           return 0;
    }
    catch(error)
    { 
        return 0;
    }
}

const get_product_by_rating_api=async(rating)=>{
    try{   
           const data=await product_data.find({"rating":rating});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}
const get_product_by_categorie_api=async(categorie)=>{
    try{   
           const data=await product_data.find({"categories":categorie});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

module.exports={get_product_by_brand_api,get_product_by_categorie_api,get_product_by_name_api,get_product_by_price_api,get_product_by_rating_api,get_product_by_upc_api}