/* sp liên quan */
document.addEventListener("DOMContentLoaded", function() {
    const relatedProductsContainer = document.querySelector(".relatedproducts_items");
    
    // Lấy danh sách sản phẩm từ local storage
    const list_cart = JSON.parse(localStorage.getItem("list_cart")) || [];
  
    // Tạo mảng chứa chỉ mục của 4 sản phẩm ngẫu nhiên
    const randomIndexes = getRandomIndexes(list_cart.length, 4);
  
    // Hiển thị các sản phẩm ngẫu nhiên trong related products
    randomIndexes.forEach(index => {
        const product = list_cart[index];
        const productCard = createProductCard(product);
        relatedProductsContainer.appendChild(productCard);
    });
  });
  
  // Hàm tạo thẻ sản phẩm
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
    <span class="discount-tag"> ${book.percent}%</span>
    <span class="new-tag">NEW</span>
    <div class="product-image goto_detail" data-product-id="${book.id}" >
        <img src="${book.img}" alt="Hình ảnh sản phẩm">
    </div>
    <div class="product-info goto_detail" data-product-id="${book.id}">
        <h3 class="product-name">${book.name}</h3>
        <div class="product-price">
            <span class="new-price">${book.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            <span class="old-price">${book.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
        </div>
        <div class="product-rating">
            <div class="rating-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="luot-ban">
            Đã bán: ${book.da_ban}k
        </div>
    </div>
    <div class="product-buttons">
        <button class="btn add-to-cart-btn"><i class="fa fa-thin fa-cart-plus"></i></button>
        <button class="btn buy-now-btn">MUA NGAY</button>
    </div>
    `;
    return card;
  }
  
  // Hàm tạo mảng các chỉ mục ngẫu nhiên
  function getRandomIndexes(maxRange, count) {
    const indexes = [];
    while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * maxRange);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
  }