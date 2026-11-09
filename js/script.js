// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");
// document.querySelectorAll(".stage-gallery img")

// // Open and close the mobile navigation menu
// menuToggle.addEventListener("click", () => {
//   const isOpen = navLinks.classList.toggle("show");
//   menuToggle.setAttribute("aria-expanded", isOpen);
// });

// // Close the menu after clicking a navigation link
// document.querySelectorAll(".nav-links a").forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("show");
//     menuToggle.setAttribute("aria-expanded", "false");
//   });
// });

// // Set the current year automatically
// document.getElementById("year").textContent = new Date().getFullYear();

// // Highlight the current section in the navbar
// const sections = document.querySelectorAll("main section[id]");
// const navItems = document.querySelectorAll(".nav-links a:not(.nav-contact)");

// window.addEventListener("scroll", () => {
//   let currentSection = "home";
//   sections.forEach((section) => {
//     if (window.scrollY >= section.offsetTop - 130) {
//       currentSection = section.id;
//     }
//   });

//   navItems.forEach((link) => {
//     link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
//   });
// });


// (base / "index.html").write_text(html, encoding="utf-8")
// (base / "style.css").write_text(css, encoding="utf-8")
// (base / "script.js").write_text(js, encoding="utf-8")

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

}

// Current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight current section
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a:not(.nav-contact)");

if (sections.length && navItems.length) {

    window.addEventListener("scroll", () => {

        let currentSection = "home";

        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 130) {
                currentSection = section.id;
            }
        });

        navItems.forEach((link) => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentSection}`
            );
        });

    });

}



    //=================== national=======================//

function toggleGallery(button) {

  const section = button.closest(".stage-section");
  const gallery = section.querySelector(".stage-gallery");

  gallery.classList.toggle("show-all");

  if (gallery.classList.contains("show-all")) {
    button.textContent = "Show Less";
  } else {
    button.textContent = "View All Photos";
  }

}

// =============================================
// IMAGE GALLERY
// =============================================

// =============================================
// IMAGE GALLERY
// =============================================
const galleryModalElement = document.getElementById("galleryModal");

if (galleryModalElement && typeof bootstrap !== "undefined") {

    const galleryModal = new bootstrap.Modal(galleryModalElement);

    let currentImages = [];
    let currentIndex = 0;

    const modalImage = document.getElementById("modalImage");
    const imageCounter = document.getElementById("imageCounter");
    const nextButton = document.getElementById("nextImage");
    const prevButton = document.getElementById("prevImage");

    function showImage() {
        if (!currentImages.length) return;

        modalImage.src = currentImages[currentIndex].src;
        modalImage.alt = currentImages[currentIndex].alt;

        imageCounter.textContent =
            `${currentIndex + 1} / ${currentImages.length}`;
    }

    // فتح أي صورة من الجاليري
    document.querySelectorAll(".stage-gallery").forEach((gallery) => {

        const images = gallery.querySelectorAll("img");

        images.forEach((img, index) => {

            img.addEventListener("click", () => {

                // جمع كل الصور حتى المخفية
                currentImages = Array.from(
                    gallery.querySelectorAll("img")
                );

                currentIndex = index;

                showImage();
                galleryModal.show();

            });

        });

    });

    // الصورة التالية
    nextButton.addEventListener("click", () => {

        if (!currentImages.length) return;

        currentIndex = (currentIndex + 1) % currentImages.length;
        showImage();

    });

    // الصورة السابقة
    prevButton.addEventListener("click", () => {

        if (!currentImages.length) return;

        currentIndex =
            (currentIndex - 1 + currentImages.length) % currentImages.length;

        showImage();

    });

    // التنقل بالكيبورد
    document.addEventListener("keydown", (event) => {

        if (!galleryModalElement.classList.contains("show")) return;

        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage();
        }

        if (event.key === "ArrowLeft") {
            currentIndex =
                (currentIndex - 1 + currentImages.length) % currentImages.length;

            showImage();
        }

    });

}
