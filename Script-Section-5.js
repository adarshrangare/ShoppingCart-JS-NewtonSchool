class Ui{
  static displayproducts(product){

      Storage.addtolocalstorage(product);

      const pcContainer = document.querySelector(".pccontainer");

      pcContainer.innerHTML += `<div class="cartproduct">
      <div class="pnp">
      <div class="img">
      <img width="90px" src=" ${product.image} " alt="">
      </div>
      <div class="nameandprice">
      <p> ${product.title} </p>
      <p> ${product.price} </p>
      </div>
      </div>
      
      <button class="delete" productid=${product.id}>
      X
      </button>
      </div>`

  }

  static displayproductsLS(){
      const pcContainer = document.querySelector(".pccontainer");
      const products = Storage.getproducts();

      products.forEach((e)=>{

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

  static removeproduct(e) {
      e.parentElement.remove();
  }

}

window.Ui = Ui;