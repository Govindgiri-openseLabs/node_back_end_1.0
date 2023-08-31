const express=require('express');
const router=express.Router();
const {get_by_name,get_by_brand,get_by_categorie,get_by_price,get_by_rating,get_by_upc}=require('../../modules/product_modules/product_filter_module')

router.route('/name').post(get_by_name);
router.route('/brand').post(get_by_brand)
router.route('/upc').post(get_by_upc)
router.route('/price').post(get_by_price)
router.route('/rating').post(get_by_rating)
router.route('/categorie').post(get_by_categorie)

module.exports=router;