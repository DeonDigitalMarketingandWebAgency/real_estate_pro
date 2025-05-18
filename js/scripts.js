document.addEventListener("DOMContentLoaded", function () {
    // Select both Min and Max price fields
    const minPriceField = document.getElementById("priceMin");
    const maxPriceField = document.getElementById("priceMax");

    // Set minimum and maximum allowed prices
    const MIN_PRICE = 500000; // ₦500,000
    const MAX_PRICE = 2500000000; // ₦2,500,000,000

    // Helper function to format input with commas
    function formatNumberWithCommas(value) {
        return value.replace(/\D/g, "") // Remove non-numeric characters
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
    }

    // Helper function to display a message for 30 seconds
    function showMessage(message) {
        // Create a message container
        const messageContainer = document.createElement("div");
        messageContainer.style.position = "fixed";
        messageContainer.style.bottom = "10px";
        messageContainer.style.right = "10px";
        messageContainer.style.padding = "15px";
        messageContainer.style.backgroundColor = "#ffdddd";
        messageContainer.style.color = "#d8000c";
        messageContainer.style.border = "1px solid #d8000c";
        messageContainer.style.borderRadius = "5px";
        messageContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        messageContainer.style.zIndex = "1000";
        messageContainer.innerText = message;

        // Append the message container to the body
        document.body.appendChild(messageContainer);

        // Remove the message after 30 seconds
        setTimeout(() => {
            messageContainer.remove();
        }, 3000);
    }

    // Helper function to validate price input
    function validatePrice(input, min, max, isMinField) {
        // Remove commas and parse as number
        let value = parseInt(input.replace(/,/g, ""), 10) || 0;

        // Check if value is below the minimum
        if (isMinField && value < min) {
            showMessage(
                `Sorry, we currently don't have any property lower than ₦${min.toLocaleString()} at the moment. Kindly check back some other time.`
            );
            value = min;
        }

        // Check if value is above the maximum
        if (!isMinField && value > max) {
            showMessage(
                `Sorry, we currently don't have any property higher than ₦${max.toLocaleString()} at the moment. Kindly check back some other time.`
            );
            value = max;
        }

        return value;
    }

    // Event listener for Min and Max fields
    [minPriceField, maxPriceField].forEach(function (field, index) {
        field.addEventListener("input", function (e) {
            // Format input value with commas
            let formattedValue = formatNumberWithCommas(e.target.value);

            // Validate input for Min or Max field
            const value = validatePrice(
                formattedValue,
                MIN_PRICE,
                MAX_PRICE,
                index === 0 // Check if it's the Min field
            );

            // Update the input field with validated and formatted value
            e.target.value = formatNumberWithCommas(value.toString());
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    fadeInElements.forEach((el) => observer.observe(el));
});

// Initialize Flatpickr
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#preferredDate", {
        dateFormat: "Y-m-d", // Custom format: YYYY-MM-DD
        minDate: "today",   // Disable past dates
        enableTime: false,  // Only date selection
    });

    // Form submission
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Validation check
        const allFieldsFilled = Array.from(this.querySelectorAll('input, textarea')).every(input => input.checkValidity());
        if (!allFieldsFilled) {
            alert("Please fill in all required fields correctly.");
            return;
        }

        // Pop-up message
        alert("Your Appointment has been successfully submitted, we will reach out to you shortly. Thank You! 👍");

        // Redirect after a few seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000); // 3 seconds delay
    });
});

// Blog Post
let currentPage = 1;
const postsPerPage = 5;

// Render Posts
function renderPosts() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    const blogContainer = document.getElementById("blog-posts");
    blogContainer.innerHTML = "";
    paginatedPosts.forEach((post) => {
        blogContainer.innerHTML += `
            <div class="card mb-4">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content.substring(0, 150)}...</p>
                    <p><small>By ${post.author} | ${post.date}</small></p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;
    });
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link" href="#" onclick="changePage(currentPage - 1)">Previous</a>
        </li>
    `;
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${currentPage === i ? "active" : ""}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    pagination.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link" href="#" onclick="changePage(currentPage + 1)">Next</a>
        </li>
    `;
}

function changePage(page) {
    currentPage = page;
    renderPosts();
    renderPagination();
}

// Featured Posts
function renderFeaturedPosts() {
    const featuredPosts = posts.filter((post) => post.featured);
    const featuredCarousel = document.getElementById("featured-posts");
    featuredCarousel.innerHTML = featuredPosts
        .map(
            (post, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${post.image}" class="d-block w-100" alt="${post.title}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${post.title}</h5>
                </div>
            </div>
        `
        )
        .join("");
}

// Popular Posts
function renderPopularPosts() {
    const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 5);
    const popularPostsContainer = document.getElementById("popular-posts");
    popularPosts.forEach((post) => {
        popularPostsContainer.innerHTML += `
            <li class="list-group-item">${post.title}</li>
        `;
    });
}

function renderAuthorProfile(author) {
    return `
        <div class="d-flex align-items-center mt-3">
            <img src="${author.image}" alt="${author.name}" class="rounded-circle me-2" style="width: 50px; height: 50px;">
            <div>
                <p class="mb-0"><strong>${author.name}</strong></p>
                <small>${author.bio}</small>
                <div>
                    <a href="${author.social.twitter}" target="_blank">Twitter</a> | 
                    <a href="${author.social.linkedin}" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    `;
}



// Comments
// document.getElementById("comment-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const commentInput = document.getElementById("comment-input");
//     const commentList = document.getElementById("comments-list");
//     commentList.innerHTML += `<p>${commentInput.value}</p>`;
//     commentInput.value = "";
// });

// Initial Rendering
renderPosts();
renderPagination();
renderFeaturedPosts();
renderPopularPosts();
