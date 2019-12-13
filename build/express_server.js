"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) {
    return response.send("这里是首页");
});
app.get('/api/demo', function (request, response) {
    response.json(products);
    return response.send("这里是demo!哈哈");
});
var server = app.listen(8080, "localhost", function () {
    console.log("服务器已经开启。。。。");
});
// 商品类的定义文件
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
    }
    return Product;
}());
exports.Product = Product;
// 商品数据
var products = [
    new Product(1, "商品1", 1.99, 1.5, "这是商品1"),
    new Product(2, "商品2", 2.99, 2.5, "这是商品2"),
    new Product(3, "商品3", 3.99, 3.5, "这是商品3"),
    new Product(4, "商品4", 4.99, 4.5, "这是商品4"),
    new Product(5, "商品5", 5.99, 4.5, "这是商品5")
];
