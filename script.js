function toggleSearch() {
    const searchBox = document.getElementById("search-box");
    const searchContainer = document.getElementById("search-div");
    const navContainer = document.getElementById("hidden-links");
  
    const isSearchVisible = searchBox.style.display === "block";
    if (searchBox && navContainer) {
      // Toggle search box
      searchBox.style.display = isSearchVisible ? "none" : "block";
  
      navContainer.style.display = isSearchVisible ? "block" : "none";
    }
    searchContainer.style.display = isSearchVisible ? "none" : "block";
  }
  
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let started = false;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            counters.forEach((counter) => {
              let target = +counter.getAttribute("data-target");
              let count = 0;
              let increment = Math.ceil(target / 100);
  
              let updateCounter = setInterval(() => {
                count += increment;
                if (count >= target) {
                  counter.innerText = target;
                  clearInterval(updateCounter);
                } else {
                  counter.innerText = count;
                }
              }, 30);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(document.querySelector(".stats-section"));
  });
  
  // Testimonial section
  document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    nextButton.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevButton.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            index = i;
            updateSlider();
        });
    });

    updateSlider();
});

  
  
  document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      parent.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const flavorOptions = document.querySelectorAll(".flavor-option");
  
    flavorOptions.forEach((option) => {
      const radio = option.querySelector("input");
  
      radio.addEventListener("change", function () {
        flavorOptions.forEach((opt) => opt.classList.remove("selected"));
  
        option.classList.add("selected");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const flavorOptions = document.querySelectorAll("input[name='flavor']");
    const purchaseOptions = document.querySelectorAll("input[name='purchase']");
    const cartLink = document.getElementById("cart-link");

    function updateCartLink() {
        const selectedFlavor = document.querySelector("input[name='flavor']:checked").value;
        const selectedPurchase = document.querySelector("input[name='purchase']:checked").value;
        
        // Construct the new cart link URL
        const newUrl = `https://example.com/cart?flavor=${selectedFlavor}&purchase=${selectedPurchase}`;
        
        cartLink.href = newUrl;
    }

    // Attach event listeners to both radio groups
    flavorOptions.forEach(option => option.addEventListener("change", updateCartLink));
    purchaseOptions.forEach(option => option.addEventListener("change", updateCartLink));

    // Initialize the cart link on page load
    updateCartLink();
});
