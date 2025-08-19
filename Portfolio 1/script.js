const roles = ["Web Developer", "UI/UX Designer", "Web Designer", "Script Writer", "Frontend Developer"];
let i = 0; // roles
let j = 0; //huruf di dalam roles
let currentRole = "";
let isDeleting = false;
const speed = 150;
const typingSpan = document.querySelector(".typing-text span");

function typeEffect() {
    currentRole = roles[i];

        if (!isDeleting && j <= currentRole.length) { // -> mengetik huruf baru
            typingSpan.textContent = currentRole.substring(0, j++);
            setTimeout(typeEffect, speed);
        } else if (isDeleting && j >= 0) { // menghapus huruf 
            typingSpan.textContent = currentRole.substring(0, j--);
            setTimeout(typeEffect, speed / 2);
        } else if (!isDeleting && j > currentRole.length) { //selesai mengetik 1 role
            if (currentRole === "UI/UX Designer") {
                setTimeout(() => isDeleting = true, 1000); // pause di UI/UX Designer
            } else {
                isDeleting = true;
            }
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && j < 0) { // selesai mengetik semua huruf
            isDeleting = false;
            i = (i + 1) % roles.length;
            setTimeout(typeEffect, speed);
        }
    }

typeEffect();