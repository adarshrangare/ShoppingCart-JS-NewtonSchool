
class Storage {
    
    static getproducts() {
      let products = [];
      if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
      }
      return products;
    }
  
    
    static addtolocalstorage(product) {
      const products = this.getproducts();
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    }
  
    
    static removeproduct(id) {
      const products = this.getproducts();
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  }