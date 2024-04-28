 //ĐỊA CHỈ GIAO HÀNG 
 const districtsData = {
    "Hà Nội": {
        "Ba Đình": ["Phường 1", "Phường 2", "Phường 3", ],
        "Hoàn Kiếm": ["Phường 1", "Phường 2", "Phường 3", ],
    },
    "Hồ Chí Minh": {
        "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Kho", ],
        "Quận 2": ["Phường Thảo Điền", "Phường An Phú", "Phường Bình An", ], 
        "Quận Gò Vấp": ["Phường 1", "Phường 2", "Phường 3", "Phường 4",],
    },
    "Đà Nẵng": {
      "Quận Liên Chiểu": ["Phường Hòa Minh", "Phường Hòa Khánh Bắc", "Phường Hòa Khánh Nam",],
      "Quận Thanh Khê": ["Phường Thanh Khê Tây", "Phường Thanh Khê Đông", "Phường Vĩnh Trung", "Phường Thạc Gián", "Phường Chính Gián",],
      "Quận Sơn Trà": ["Phường Thọ Quang", "Phường Phước Mỹ", "Phường An Hải Đông", "Phường An Hải Bắc",],
    },
  };
  
  function updateDistricts() {
    const selectedProvince = document.getElementById("tinhthanh").value;
    const districtSelect = document.getElementById("quanhuyen");
    const wardSelect = document.getElementById("phuongxa");
  
    // Xóa các lựa chọn cũ
    districtSelect.innerHTML = "<option value=''>Chọn quận/huyện</option>";
    wardSelect.innerHTML = "<option value=''>Chọn phường/xã</option>";
  
    // Thêm các quận/huyện tương ứng
    if (selectedProvince in districtsData) {
        Object.keys(districtsData[selectedProvince]).forEach(district => {
            const option = document.createElement("option");
            option.text = district;
            option.value = district;
            districtSelect.add(option);
        });
    }
  }
  
  function updateWards() {
    const selectedProvince = document.getElementById("tinhthanh").value;
    const selectedDistrict = document.getElementById("quanhuyen").value;
    const wardSelect = document.getElementById("phuongxa");
  
    // Xóa các lựa chọn cũ
    wardSelect.innerHTML = "<option value=''>Chọn phường/xã</option>";
  
    // Thêm các phường/xã tương ứng
    if (selectedProvince in districtsData && selectedDistrict in districtsData[selectedProvince]) {
        districtsData[selectedProvince][selectedDistrict].forEach(ward => {
            const option = document.createElement("option");
            option.text = ward;
            option.value = ward;
            wardSelect.add(option);
        });
    }
  }
  //PHƯƠNG THỨC VẬN CHUYỂN 
  //PHƯƠNG THỨC THANH TOÁN 
  

  function validateAndConfirm() {
    // Lấy ra tất cả các trường nhập liệu
    var hoTen = document.getElementById("hoten").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var quocGia = document.getElementById("quocgia").value;
    var tinhThanh = document.getElementById("tinhthanh").value;
    var quanHuyen = document.getElementById("quanhuyen").value;
    var phuongXa = document.getElementById("phuongxa").value;
    var diaChi = document.getElementById("address").value;
    var shippingMethod = document.querySelector('input[name="shipping-method"]:checked');
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked');

     // Kiểm tra email có chứa ký tự @ hay không
     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     var isEmailValid = emailPattern.test(email);
     if (!isEmailValid) {
      alert("Email không hợp lệ. Vui lòng nhập lại email.");
      return; // Dừng lại nếu email không hợp lệ
      }

      // Nếu email hợp lệ, kiểm tra các trường thông tin khác
      if (hoTen === '' || sdt === '' || quocGia === '' || tinhThanh === '' || quanHuyen === '' || phuongXa === '' || diaChi === '' || !shippingMethod || !paymentMethod) {
        alert("Vui lòng điền đầy đủ thông tin.");
      } else {
        alert("Đơn hàng của bạn đã thanh toán thành công!");
        window.location.href = "trangchu.html";
      }
}


// Hàm để chuyển hướng về trang giỏ hàng
function redirectToCartPage() {
  window.location.href = "giohang.html"; // Thay đổi URL tương ứng với trang giỏ hàng của bạn
}