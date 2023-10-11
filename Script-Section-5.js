 // Section 5##############################################################
 const pcContainer = document.querySelector('.pccontainer');

 class Ui{
     
     static displayproducts(e){

         
         pcContainer.innerHTML = `<div class="cartproduct">
         <div class="pnp">
         <div class="img">
         <img width="90px" src=" ${e.image} " alt="">
         </div>
         <div class="nameandprice">
         <p> ${e.title} </p>
         <p> ${e.price} </p>
         </div>
         </div>
         
         <button class="delete" productid=${e.id}>
         X
         </button>
         </div>`

     }

     static displayproductsLS(){
         let products = Storage.getproducts();

         products.map((e)=>{

             pcContainer.innerHTML += `<div class="cartproduct">
             <div class="pnp">
             <div class="img">
             <img width="90px" src=" ${e.image} " alt="">
             </div>
             <div class="nameandprice">
             <p> ${e.title} </p>
             <p> ${e.price} </p>
             </div>
             </div>
             
             <button class="delete" productid=${e.id}>
             X
             </button>
             </div>`
         })
     }

 }

