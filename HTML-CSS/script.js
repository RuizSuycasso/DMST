// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Dynamic services loading (simulate AJAX request)
const services = [
    { name: "Gia Sư Toán", description: "Hỗ trợ học toán từ cơ bản đến nâng cao." },
    { name: "Gia Sư Tiếng Anh", description: "Nâng cao trình độ tiếng Anh giao tiếp và học thuật." },
    { name: "Gia Sư Lý", description: "Gia sư chuyên môn cao, giúp bạn hiểu sâu kiến thức vật lý." },
    { name: "Gia Sư Hóa", description: "Học Hóa dễ dàng với đội ngũ gia sư xuất sắc." }
];

function loadServices() {
    const servicesContainer = document.querySelector('.features .container');
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'feature-item';
        div.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', loadServices);

// Contact form validation
const form = document.querySelector('.contact form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Email không hợp lệ!");
    } else {
        alert("Gửi thành công! Cảm ơn bạn đã liên hệ.");
        form.reset();
    }
    document.getElementById('giasutoanLink').addEventListener('click', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định
        window.history.replaceState(null, null, 'Giasutoan.html'); // Thay đổi URL mà không tạo thêm lịch sử
        window.location.href = 'Giasutoan.html'; // Chuyển đến trang Gia Sư Toán
    });
    document.getElementById('giasulyLink').addEventListener('click', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định
        window.history.replaceState(null, null, 'Giasuly.html'); // Thay đổi URL mà không tạo thêm lịch sử
        window.location.href = 'Giasuly.html'; // Chuyển đến trang Gia Sư Toán
    });
    document.getElementById('giasutienganhLink').addEventListener('click', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định
        window.history.replaceState(null, null, 'Giasutienganh.html'); // Thay đổi URL mà không tạo thêm lịch sử
        window.location.href = 'Giasutienganh.html'; // Chuyển đến trang Gia Sư Toán
    });
});
