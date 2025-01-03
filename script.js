let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('fade'); // Remove fade effect from all slides
    }

    // Increment the slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide if at the last slide
    }

    // Display the current slide and apply the fade effect
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');

    // Call the function every 3 seconds to change slide automatically
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to change slide manually
function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('fade');
    }

    // Show the current slide with fade effect
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');
}

function updateClock() {
    const clockElement = document.getElementById('real-time-clock');
    const dateElement = document.getElementById('real-time-date');
    const now = new Date();

    // Format waktu: HH:mm:ss
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format tanggal: Hari, DD MMMM YYYY
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);

    // Update elemen
    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Jalankan `updateClock` setiap detik
setInterval(updateClock, 1000);
updateClock(); // Jalankan segera saat halaman dimuat
