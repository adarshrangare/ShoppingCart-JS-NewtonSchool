

    // Section 2

    const cartIcon = document.querySelector(".carticon");
    const cartUI = document.querySelector(".cartui");

    cartIcon.addEventListener("click",(e)=>{
        console.log("clicked Cart")
       cartUI.classList.add("cartopened");
        
    })

    const closeCart = document.querySelector(".closecart");

    closeCart.addEventListener("click",(e)=>{
        console.log("clicked Cart")
       cartUI.classList.remove("cartopened");
        
    })
