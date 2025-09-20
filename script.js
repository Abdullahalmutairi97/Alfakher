
let cart = [];

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name: name, price: price, quantity: 1 }); 
    }

    
    displayCart();
}


function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    let cartHtml = '';
    let subtotal = 0;


    cart.forEach(item => {
        
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;

        cartHtml += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>SAR ${itemSubtotal.toFixed(2)}</td>
            </tr>
        `;
    });


    cartItemsElement.innerHTML = cartHtml;


    const tax = subtotal * 0.15;

 
    const total = subtotal + tax;


    document.getElementById('total-subtotal').textContent = `SAR ${subtotal.toFixed(2)}`;
    document.getElementById('total-tax').textContent = `SAR ${tax.toFixed(2)}`;
    document.getElementById('total-overall').textContent = `SAR ${total.toFixed(2)}`;
}

function menutoggle() {



    
}
