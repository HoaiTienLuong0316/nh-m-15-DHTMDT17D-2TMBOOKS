document.addEventListener("DOMContentLoaded", function () {
    var list_cart = JSON.parse(localStorage.getItem("list_cart")) || [];
    const product_cart = document.getElementById('--wrapper-list-cart');
    let total_cart = 0;
    const title=document.getElementById('title-cart')
      title.textContent = `GIỎ HÀNG (${list_cart.length || 0} sản phẩm)`
  
    // Hiển thị các sản phẩm trong giỏ hàng
    list_cart.forEach((cart, index) => {
        var product_total = cart.price_new * cart.quantity;
        total_cart += product_total;
        const card = document.createElement("div");
        card.classList.add("--card-cart");
        card.innerHTML = `<div class="wrapper-info">
            <img class="img-product" src="${cart.img}" alt="" />
            <div class="info-product">
                <div class="name-product">${cart.name}</div>
                <div class="price-pro">
                    <div class="price-product" id="pricenew">${cart.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                    <div class="price-product" id="priceold">${cart.price_old ? cart.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ''}</div>
                </div>
            </div>
        </div>
        <p class="quantity price-product">${cart.quantity}</p>
        <p class="total-money">${product_total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        <div class="delete-product">
            <img src="./image/delete.png" alt="" />
        </div>`;
  
        product_cart.appendChild(card);
  
        // Xóa sản phẩm khỏi giỏ hàng
        card.querySelector('.delete-product').addEventListener('click', function() {
            list_cart.splice(index, 1);
            localStorage.setItem('list_cart', JSON.stringify(list_cart));
            card.remove();
            updateTotal(); // Cập nhật tổng tiền sau khi xóa sản phẩm
            updateTitle(); // Cập nhật số lượng sản phẩm trong tiêu đề
            alert("Sản phẩm đã xóa khỏi giỏ hàng!");
        });
    });
  
    // Hàm cập nhật tổng tiền
    function updateTotal() {
        total_cart = list_cart.reduce((total, cart) => {
            return total + cart.price_new * cart.quantity;
        }, 0);
  
        const thanh_tien = document.getElementById('thanh-tien');
        thanh_tien.textContent = total_cart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  
        const final_total = document.getElementById('final-total');
        final_total.textContent = total_cart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  
        const total_cart_list = document.getElementById('total_cart_list');
        total_cart_list.textContent = total_cart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
  
    updateTotal(); // Cập nhật tổng tiền ban đầu
  
    // Hiển thị số lượng sản phẩm trong giỏ hàng
    const cart_list = document.getElementById('quantity-cart-list');
    cart_list.textContent = list_cart.length;
  });


  // Hàm để chuyển hướng về trang thanh toán
function redirectToCheckOut() {
    window.location.href = "checkout.html"; // Thay đổi URL tương ứng với trang giỏ hàng của bạn
  }