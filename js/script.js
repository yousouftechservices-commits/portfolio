// ==========================================
// SKILL BARS (animate width when scrolled into view)
// ==========================================

const progressBars = document.querySelectorAll(".progress-bar");

if (progressBars.length && "IntersectionObserver" in window) {

    const barObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                barObserver.unobserve(entry.target);
            }
        });

    }, { threshold: 0.4 });

    progressBars.forEach(bar => barObserver.observe(bar));

} else {
    // Fallback: no IntersectionObserver support, just show full bars
    progressBars.forEach(bar => bar.classList.add("in-view"));
}


// ==========================================
// BACK TO TOP BUTTON
// ==========================================

// Get the button
const topBtn = document.getElementById("topBtn");

// Show button when user scrolls down
window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

// Scroll to the top when clicked
topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// ==========================================
// HIRE ME BUTTON
// ==========================================

const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {

    hireBtn.onclick = function (e) {

        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    };

}


// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector(".contact-form");

if (form) {
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            Accept: "application/json"
        }
    })

    .then((response) => {

        if (response.ok) {

            alert("Thank you! Your message has been sent successfully.");

            form.reset();

        } else {

            alert("Something went wrong. Please try again or email me directly.");

        }

    })

    .catch(() => {

        alert("Network error. Please check your connection and try again.");

    })

    .finally(() => {

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

    });

});
}


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isCurrentlyOpen = navLinks.classList.contains("active");

        if (isCurrentlyOpen) {
            // Closing — instant, no delay
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            // Opening — delayed
            setTimeout(() => {
                navLinks.classList.add("active");
                menuToggle.setAttribute("aria-expanded", "true");
                menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }, 800); // delay in milliseconds — lowered from 4000ms to 800ms since you said it was too much; adjust this number to taste
        }

    });
}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

});