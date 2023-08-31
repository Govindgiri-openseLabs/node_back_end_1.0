const express=require('express');
const router=express.Router();
const{get_product,add_product,update_product,delete_product}=require('../../modules/product_modules/product_crud_module');

router.route('/get').post(get_product);
router.route('/add').post(add_product);
router.route('/update').patch(update_product);
router.route('/delete').delete(delete_product);

module.exports=router;