document.addEventListener("DOMContentLoaded", function () {
  // Lấy ID sản phẩm từ query parameter
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("id");
  var productList = JSON.parse(localStorage.getItem("list_book"));
  var product = productList.find((item) => item.id == productId);
  console.log('product: ', product);

  document.getElementById("add-to-cart").addEventListener("click", function () {
    var cartList = JSON.parse(localStorage.getItem("list_cart")) || [];

    const quantity_input = document.getElementById('quantity-item');
    const quantity_value = parseInt(quantity_input.value);

    var check_product_index = cartList.findIndex((item) => item.id === product.id);
    console.log('check_product_index: ', check_product_index);
    if (check_product_index === -1) {
      cartList.push({ ...product, quantity: quantity_value });
      localStorage.setItem("list_cart", JSON.stringify(cartList));
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    } else {
      cartList[check_product_index].quantity = cartList[check_product_index].quantity + quantity_value;
      localStorage.setItem("list_cart", JSON.stringify(cartList));
      alert("Số lượng sản phẩm trong giỏ hàng đã được tăng lên!");
    }
  });
  const img = document.getElementById('show-img-detail')
  img.innerHTML = `<img class="img-detail" src="${product.img}" alt="" />`

  const name = document.getElementById('name-product')
  name.textContent = product.name
  const price_new = document.getElementById('price-new')
  price_new.textContent = product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  const price_old = document.getElementById('price-old')
  price_old.textContent = product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  const percent_discount = document.getElementById('percent-discount')
  percent_discount.textContent = `-${product.percent}%`
});


// add quantity
var inputVal = document.getElementById('quantity-item')
var quantity = 1;
function increment() {
  quantity++
  inputVal.value = quantity
}
function decrement() {
  if (quantity > 1) {
    quantity--
    inputVal.value = quantity
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tham số id từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  // Tìm sản phẩm tương ứng trong list_book
  const product = list_book.find(item => item.id === productId);

  // Hiển thị thông tin chi tiết của sản phẩm
  if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.img;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').innerHTML = `Giá: <span>${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>`;
  }
});

{/* <div class="row item-start-detail">
<div class="col-6">
  <img class="img-detail" src="${product.img}" alt="" />
</div>
<div class="col-6">
  <h2 class="">${product.name}</h2>
  <div class="d-flex justify-content-between">
    <div>
      <p class="text-description">
        Nhà cung cấp: <strong>2TM Books</strong>
      </p>
      <p class="text-description">
        Xuất xứ: <strong> Việt Nam</strong>
      </p>
    </div>
    <div>
      <p class="text-description">
        Thương hiệu: <strong> Tiger Family</strong>
      </p>
    </div>
  </div>
  <div class="wrapper-start">
    <div>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div style="margin-left: 8px">(0 đánh giá)</div>
  </div>
  <div class="--wrapper-content-quantity">
  <p>Số lượng</p>
  <div class="--wrapper-quantity">
  <button onClick="decrement()">-</button>
  <input type="text" value="1" id="quantity-item" readonly />
  <button onClick="increment()">+</button>
  </div>
</div>
  <div class="wrapper-price">
    <p class="new-price-detail">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
    <p class="old-price-detail">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
    <div class="percent-detail">-${product.percent}%</div>
  </div>
  <div class="actions">
    <button id="buy-now">MUA NGAY</button>
    <button id="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
  </div>
</div>
</div> */}


