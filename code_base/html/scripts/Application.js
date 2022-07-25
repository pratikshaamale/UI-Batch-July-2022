import Product from './Module.js'

function printProduct(product) {
    console.log(product.toString());
    }
    const tv = new Product(101, "Sony Tv", 'images/sony.jpg', 4.2);
    printProduct(tv);
    