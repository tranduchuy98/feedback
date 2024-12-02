

function submitForm(e, form) {
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://learn-be-37y5.onrender.com/auth/getForm", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
}

const images = document.querySelectorAll('.gallery-item');

// Thêm sự kiện click cho từng ảnh để nhấp vào
images.forEach(image => {
    image.addEventListener('click', () => {
        // Hiển thị overlay
        document.getElementById('overlay').style.display = 'flex';
        // Đặt nguồn ảnh vào img zoomed
        document.getElementById('zoomedImage').src = image.src;
    });
});

// Hàm để đóng overlay khi nhấp vào
function closeZoom() {
    document.getElementById('overlay').style.display = 'none';
}