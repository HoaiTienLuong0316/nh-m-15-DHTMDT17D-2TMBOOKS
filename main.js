"https://unpkg.com/scrollreveal"

    document.addEventListener("DOMContentLoaded", function () {
        const flashsaleContainer = document.getElementById("products");
        const featuredProductsContainer = document.getElementById("product-container");
        
        const list_book = [
            {
                id:1,
                name: "Làm chủ tuổi 20",
                img:'./image/lam-chu-tuoi-20.png',
                price_new: 90000,
                price_old: 180000,
                percent:50,
                da_ban:'5'
            },
            {
                id:2,
                name: "Người tập lớn",
                img:'./image/nguoi-tap-lon.jpg',
                price_new: 90000,
                price_old: 180000,
                percent:60,
                da_ban:'2,4',
            },
            {
                id:3,
                name: "Đời ngắn đừng ngủ dài",
                img:'./image/doi-ngan-dung-ngu-dai.jpg',
                price_new: 60000,
                price_old: 100000,
                percent:40,
                da_ban: "1",
            },
            {
                id:4,
                name: "Đi tìm lẽ sống",
                img:'./image/di-tim-le-song.jpg',
                price_new: 65000,
                price_old: 100000,
                percent:35,
                da_ban: "2",
    
            },
            {
                id:5,
                name: "Đừng lựa chọn an nhàn khi còn trẻ",
                img:'./image/dung-lua-chon-an-nhan-khi-con-tre.jpg',
                price_new: 74000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:6,
                name: "Trốn lên mái nhà để khóc",
                img:'./image/tron-len-mai-nha-de-khoc.jpg',
                price_new: 80000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:7,
                name: "Không nỗ lực, đừng tham vọng",
                img:'./image/khong-no-luc-dung-tham-vong.jpg',
                price_new: 96000,
                price_old: 120000,
                percent:20,
                da_ban: "2",
            },
            {
                id:8,
                name: "Khéo ăn nói sẽ có được thiên hạ",
                img:'./image/kheo-an-noi-se-co-duoc-thien-ha.png',
                price_new: 105000,
                price_old: 140000,
                percent:25,
                da_ban: "2",
            },
            {
                id:9,
                name: "Tư duy ngược",
                img:'./image/tu-duy-nguoc.jpg',
                price_new: 105000,
                price_old: 140000,
                percent:25,
                da_ban: "2",
            },
            {
                id:10,
                name: "Kỷ luật bản thân",
                img:'./image/ky-luat-ban-than.jpg',
                price_new: 80000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:11,
                name: "Thay thái độ, đổi cuộc đời",
                img:'./image/thay-thai-do-doi-cuoc-doi.jpg',
                price_new: 81000,
                price_old: 90000,
                percent:10,
                da_ban: "2",
            },
            {
                id:12,
                name: "Nuôi dưỡng đứa trẻ bên trong bạn",
                img:'./image/nuoi-duong-dua-tre-ben-trong-ban.jpg',
                price_new: 135000,
                price_old: 150000,
                percent:10,
                da_ban: "2",
            },
            {
                id:13,
                name: "Đứa trẻ hiểu chuyện thường không có kẹo",
                img:'./image/dua-tre-hieu-chuyen-thuong-khong-co-keo-an.jpg',
                price_new: 80000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:14,
                name: "Trở thành phiên bản tốt hơn của chính mình",
                img:'./image/tro-thanh-phien-ban-tot-hon-cua-chinh-minh.jpg',
                price_new: 134000,
                price_old: 160000,
                percent:15,
                da_ban: "2",
            },
            {
                id:15,
                name: "Khi bạn đang mơ thì người khác đang nỗ lực",
                img:'./image/khi-ban-dang-mo-thi-nguoi-khac-dang-no-luc.jpg',
                price_new: 80000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:16,
                name: "Mỗi lần vấp ngã là một lần trưởng thành",
                img:'./image/moi-lan-vap-nga-la-1-lan-truong-thanh.jpg',
                price_new: 144000,
                price_old: 180000,
                percent:20,
                da_ban: "2",
            },
            {
                id:17,
                name: "Không phải là sói nhưng cũng đừng là cừu",
                img:'./image/khong-phai-soi-nhung-cung-dung-la-cuu.jpg',
                price_new: 80000,
                price_old: 100000,
                percent:20,
                da_ban: "2",
            },
            {
                id:18,
                name: "Thay đổi một suy nghĩ, thay đổi cả cuộc đời",
                img:'./image/thay-doi-1-suy-nghi-thay-doi-ca-cuoc-doi.jpeg',
                price_new: 90000,
                price_old: 100000,
                percent:10,
                da_ban: "2",
            },   
        ]
        // add localStorage
        localStorage.setItem('list_book', JSON.stringify(list_book));
    

        const flashsaleProducts = list_book.filter(book => [1,2,3,4].includes(book.id));
        flashsaleProducts.forEach((book) => {
            const card = createProductCard(book);
            flashsaleContainer.appendChild(card);
        })
        const featureProducts = list_book.filter(book => [5,6,7,8].includes(book.id));
        featureProducts.forEach((book) => {
            const card = createProductCard(book);
            featuredProductsContainer.appendChild(card);
        })
    });

    function createProductCard(book) {
        const card = document.createElement("div");
        card.classList.add("store-product");
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
    
    document.addEventListener("DOMContentLoaded", function () {
        var productCards = document.querySelectorAll(".goto_detail");
        productCards.forEach(function (card) {
            card.addEventListener("click", function () {
                var productId = card.getAttribute("data-product-id");
                window.location.href = "chitietsp.html?id=" + productId;
            });
        });
    });


