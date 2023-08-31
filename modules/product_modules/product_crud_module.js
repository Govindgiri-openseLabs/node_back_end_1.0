const {add_product_api,get_product_by_upc_api,update_product_api,delete_product_api}=require('../../api/product_api/product_crud_api')

const add_product=async (req,res)=>{
    try{
          const product={
           'product_name':req?.body?.product_name||null,
           'brand':req?.body?.brand||null,
           'upc':req?.body?.upc||null,
           'categories':req?.body?.categories||null,
           'price':req?.body?.price||null,
           'rating':req?.body?.rating||null,
           'dimenstions':{
                'length':req?.body?.length||null,
                'width':req?.body?.width||null,
                'height':req?.body?.height||null,
                'weight':req?.body?.weight||null,
                'color':req?.body?.color||null,
            },
           'model':req?.body?.model||null,
           'warranty':req?.body?.warranty||null,
           'features':req?.body?.features||null,
           'manufacturer':req?.body?.manufacturer||null,
           'discount':req?.body?.discount||null,
           'seller':req?.body?.seller||null,
           'return_policy':req?.body?.return_policy||null,
           'stock':req?.body?.stock||null,
           'seriel_no':req?.body?.seriel_no||null,
           'orders_id':[],
         }
        try{
              const data=await get_product_by_upc_api(product.upc);
              if(data)
              return res.status(400).send("product already exist");
              try{
                    const Data=await add_product_api(product);
                    if(Data)
                    return res.status(200).send({"product added successfully":Data});
                    else return res.status(500).send("internal server error");
              } 
              catch(error)
              {
                   return res.status(500).send("product not added");
              } 
         } 
        catch(error)
         {
            return res.status(400).send("invalid product details");
         }
   
      }          
    
    catch(error)
      {
         return res.status(400).send("invalid product input");
      }
}

const get_product=async (req,res)=>{
   res.send("ok")
}
const update_product=async(req,res)=>{
   res.send("ok")
}
const delete_product=async(req,res)=>{
  res.send("ok")
}

module.exports={get_product,add_product,update_product,delete_product};