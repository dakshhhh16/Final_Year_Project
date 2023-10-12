const router = require('express').Router();

const {
    sellerRegister,
    sellerLogIn
} = require('../controllers/sellerController.js');

const {
    productCreate,
    getProducts,
    getProductDetail,
    searchProduct,
    searchProductbyCategory,
    searchProductbySubCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
} = require('../controllers/productController.js');

const {
    customerRegister,
    customerLogIn,
    getCustomerDetail,
    getCartDetail,
    cartUpdate
} = require('../controllers/customerController.js');

// Seller
router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);

// Product
router.post('/ProductCreate', productCreate);
router.get('/getSellerProducts/:id', getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);

router.put('/ProductUpdate/:id', updateProduct);
router.put('/addReview/:id', addReview);

router.get('/searchProduct/:key', searchProduct);
router.get('/searchProductbyCategory/:key', searchProductbyCategory);
router.get('/searchProductbySubCategory/:key', searchProductbySubCategory);

router.delete('/DeleteProduct/:id', deleteProduct);
router.delete('/DeleteProducts/:id', deleteProducts);
router.put('/deleteProductReview/:id', deleteProductReview);
router.delete('/deleteAllProductReviews/:id', deleteAllProductReviews);

// Customer
router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
router.get('/getCustomerDetail/:id', getCustomerDetail);
router.get('/getCartDetail/:id', getCartDetail);
router.put('/cartUpdate/:id', cartUpdate);

module.exports = router;