const {get_product_by_brand_api,get_product_by_categorie_api,get_product_by_name_api,get_product_by_price_api,get_product_by_rating_api,get_product_by_upc_api}=require('../../api/product_api/product_filter_api')


const get_by_name=async (req,res)=>{
   try{
          const product_name=req?.body?.product_name||null;
          const data=await get_product_by_name_api(product_name);
          if(data) return res.status(200).send(data);
          return res.status(400).send("product not found");
   }
   catch(error)
   {
         return res.status(500).send(error);
   }
}
const get_by_upc=async (req,res)=>{
    try{
        const upc=req?.body?.upc||null;
        const data=await get_product_by_upc_api(upc);
        if(data) return res.status(200).send(data);
        return res.status(400).send("product not found");
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
}
const get_by_brand=async (req,res)=>{
    try{
        const brand=req?.body?.brand||null;
        const data=await get_product_by_brand_api(brand);
        if(data) return res.status(200).send(data);
        return res.status(400).send("product not found");
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
}
const get_by_price=async (req,res)=>{
    try{
        const price=req?.body?.price||null;
        const data=await get_product_by_price_api(price);
        if(data) return res.status(200).send(data);
        return res.status(400).send("product not found");
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
}
const get_by_rating=async (req,res)=>{
    try{
        const rating=req?.body?.rating||null;
        const data=await get_product_by_rating_api(rating);
        if(data) return res.status(200).send(data);
        return res.status(400).send("product not found");
    }
    catch(error)
    {

    }
}
const get_by_categorie=async (req,res)=>{
    try{
        const categorie=req?.body?.categorie||null;
        const data=await get_product_by_categorie_api(categorie);
        if(data) return res.status(200).send(data);
        return res.status(400).send("product not found");
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
}


module.exports={get_by_name,get_by_brand,get_by_categorie,get_by_price,get_by_rating,get_by_upc}