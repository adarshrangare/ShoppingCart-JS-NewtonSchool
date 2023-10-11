
 
class Storage {
    static getproducts() {
        let products;
        if (localStorage.getItem("products")) {
            products = JSON.parse(localStorage.getItem("products"));
        } else {
            products = [];
        }
        return products;
    }

    static addtolocalstorage(e) {
        let products = Storage.getproducts();
        products.push(e);
        localStorage.setItem("products", JSON.stringify(products));
    }

    static removeproduct(id) {
        let products = Storage.getproducts();
        products.forEach((p, i) => {
            if (p.id == id) {
                products.splice(i, 1);
            }
        });
        localStorage.setItem("products", JSON.stringify(products));
    }
}

window.Storage=Storage
