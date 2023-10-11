
//     if(Storage.getproducts()!=0){
//         const deleteButton = document.querySelectorAll(".delete");

//     console.log(deleteButton);

//     deleteButton.forEach((eachButton)=>{
//     eachButton.addEventListener("click",(e)=>{
//         let deleteProductId = e.target.getAttribute("productid");
//         console.log(deleteProductId);

//     })
// })
//     }

document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("delete")) {

        const productId = e.target.getAttribute("productid");

        Ui.removeproduct(e.target);

        Storage.removeproduct(productId);

        bag.setAttribute("items", Storage.getproducts().length);
    }
});

