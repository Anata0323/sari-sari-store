let total = 0;

let cart = {};

function addToCart(product, price){

    // Check if product already exists
    if(cart[product]){

        cart[product].quantity += 1;

        cart[product].subtotal += price;

    }else{

        cart[product] = {

            quantity: 1,
            price: price,
            subtotal: price

        };

    }

    total += price;

    updateCart();
}

function updateCart(){

    const cartList =
    document.getElementById("cart-list");

    cartList.innerHTML = "";

    for(let product in cart){

        const item = cart[product];

        const li = document.createElement("li");

        li.textContent =
        `${item.quantity} - ${product} = ₱${item.subtotal}`;

        cartList.appendChild(li);
    }

    document.getElementById("total").textContent = total;
}

function calculateChange(){

    const payment =
    parseFloat(document.getElementById("payment").value);

    if(isNaN(payment)){

        alert("Please enter payment");

        return;
    }

    if(payment < total){

        alert("Not enough payment");

        return;
    }

    const change = payment - total;

    document.getElementById("change").textContent = change;
}

function resetCart(){

    cart = {};

    total = 0;

    document.getElementById("cart-list").innerHTML = "";

    document.getElementById("total").textContent = 0;

    document.getElementById("change").textContent = 0;

    document.getElementById("payment").value = "";
}
