class Product {
    constructor(productId, productName, imageRef, rating) {
    
        this.productId = productId;
        this.productName = productName;
        this.imageRef = imageRef;
        this.rating = rating;
    }
    toString() {
    return `${this.productName} 
    ${this.rating}`;
    }
    }
    
    export default Product;
    