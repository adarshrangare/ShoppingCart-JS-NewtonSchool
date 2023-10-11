
document.addEventListener("DOMContentLoaded", function () {
    // write your code here

    console.log(bag);
    const products = Storage.getproducts();

    bag.setAttribute("items",products.length);

});