// Blog Posts Data (Simulated for Dynamic Content)
const blogPosts = [
    {
        "id": 1,
        "title": "5 Tips for First-Time Home Buyers",
        "category": "real-estate-tips",
        "content": "Buying your first home can be daunting. Here are 5 tips to make it easier.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "John Doe",
        "views": 102,
        "date": "2024-12-01"
    },
    {
        "id": 2,
        "title": "How to Prepare Your Home for Sale",
        "category": "real-estate-tips",
        "content": "Get the best value for your home by following these staging tips.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Jane Smith",
        "views": 215,
        "date": "2024-11-25"
    },
    {
        "id": 3,
        "title": "Real Estate Trends in 2024",
        "category": "market-news",
        "content": "Explore the latest trends in the real estate market and what they mean for buyers and sellers.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Alex Brown",
        "views": 330,
        "date": "2024-11-15"
    },
    {
        "id": 4,
        "title": "The Benefits of Investing in Real Estate",
        "category": "Investment Strategies",
        "content": "Learn why real estate remains one of the safest investment options.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Sophia Lee",
        "views": 289,
        "date": "2024-11-10"
    },
    {
        "id": 5,
        "title": "How to Find the Best Rental Properties",
        "category": "real-estate-tips",
        "content": "Discover the key factors to consider when looking for rental properties.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Michael Green",
        "views": 180,
        "date": "2024-10-28"
    },
    {
        "id": 6,
        "title": "Understanding Mortgage Rates",
        "category": "market-news",
        "content": "What you need to know about mortgage rates and how to get the best deal.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Emma White",
        "views": 124,
        "date": "2024-10-15"
    },
    {
        "id": 7,
        "title": "10 Quick Renovation Ideas for Sellers",
        "category": "real-estate-tips",
        "content": "Maximize your home's value with these quick renovation ideas.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Jessica Allen",
        "views": 150,
        "date": "2024-12-03"
    },
    {
        "id": 8,
        "title": "What to Expect in the 2025 Housing Market",
        "category": "market-news",
        "content": "Insights into the housing market predictions for the upcoming year.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Steve Carter",
        "views": 200,
        "date": "2024-12-02"
    },
    {
        "id": 9,
        "title": "Top 5 Mistakes Real Estate Investors Make",
        "category": "Investment Strategies",
        "content": "Avoid these pitfalls to succeed in real estate investing.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Rachel Smith",
        "views": 175,
        "date": "2024-11-30"
    },
    {
        "id": 10,
        "title": "The Future of Green Buildings",
        "category": "market-news",
        "content": "Why green buildings are becoming a key trend in real estate.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Laura Parker",
        "views": 400,
        "date": "2024-11-28"
    },
    {
        "id": 11,
        "title": "How to Finance Your First Property",
        "category": "Investment Strategies",
        "content": "A guide to understanding financing options for first-time investors.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Mark Johnson",
        "views": 120,
        "date": "2024-11-20"
    },
    {
        "id": 12,
        "title": "Why Location Still Rules in Real Estate",
        "category": "real-estate-tips",
        "content": "The age-old rule 'location, location, location' explained.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Tom Davis",
        "views": 245,
        "date": "2024-11-18"
    },
    {
        "id": 13,
        "title": "5 Strategies to Diversify Your Portfolio",
        "category": "Investment Strategies",
        "content": "Spread risk and maximize returns with these portfolio strategies.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Amanda Lee",
        "views": 150,
        "date": "2024-11-15"
    },
    {
        "id": 14,
        "title": "The Impact of Interest Rates on Real Estate",
        "category": "market-news",
        "content": "How interest rate changes affect buying and selling trends.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Kevin Brown",
        "views": 230,
        "date": "2024-11-12"
    },
    {
        "id": 15,
        "title": "How to Identify Emerging Real Estate Markets",
        "category": "Investment Strategies",
        "content": "Spot the best markets before they become oversaturated.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Linda Taylor",
        "views": 185,
        "date": "2024-11-08"
    },
    {
        "id": 16,
        "title": "What Makes a Property a Good Flip?",
        "category": "real-estate-tips",
        "content": "Tips for identifying properties with good flipping potential.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "John Wells",
        "views": 210,
        "date": "2024-11-05"
    },
    {
        "id": 17,
        "title": "Understanding Tax Benefits of Real Estate",
        "category": "Investment Strategies",
        "content": "Leverage tax laws to save money on your real estate investments.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Chris Moore",
        "views": 190,
        "date": "2024-11-02"
    },
    {
        "id": 18,
        "title": "3 Affordable Ways to Increase Property Value",
        "category": "real-estate-tips",
        "content": "Cost-effective upgrades that significantly boost property value.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Sara Blake",
        "views": 250,
        "date": "2024-10-30"
    },
    {
        "id": 19,
        "title": "Key Indicators of a Booming Real Estate Market",
        "category": "market-news",
        "content": "Learn how to spot signs of growth in real estate markets.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Henry Grant",
        "views": 280,
        "date": "2024-10-28"
    },
    {
        "id": 20,
        "title": "The Advantages of Investing in Multi-Family Homes",
        "category": "Investment Strategies",
        "content": "Why multi-family properties are a smart investment choice.",
        "image": "img/corporate-headquarters04.jpg",
        "author": "Olivia Carter",
        "views": 195,
        "date": "2024-10-25"
    }
    // Add more dummy posts as needed
];

const postsPerPage = 2;
let currentPage = 1;

// DOM Elements
const postContainer = document.getElementById("postContainer");
const pageNumber = document.getElementById("pageNumber");
const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Load Blog Posts
function loadPosts() {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const filteredPosts = blogPosts.filter(post => {
        const searchQuery = searchInput.value.toLowerCase();
        const matchesCategory = categoryFilter.value === "all" || post.category === categoryFilter.value;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    postContainer.innerHTML = "";
    paginatedPosts.forEach(post => {
        const postElement = `
            <div class="col-md-6 post-item">
                <div class="card">
                <img src="${post.image}" class="card-img-top" alt="${post.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <p class="card-category"><strong>Category:</strong> ${post.category}</p>
                    <p class="card-author"><strong>Author:</strong> ${post.author}</p>
                    <p class="card-views"><strong>Views:</strong> ${post.views}</p>
                    <p class="card-date"><strong>Date:</strong> ${post.date}</p>
                    <!-- Social Media Icons -->
                    <div class="social-icons">
                        <a href="https://facebook.com" target="_blank" class="social-icon">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="social-icon">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://pinterest.com" target="_blank" class="social-icon">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </div>
                    <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        postContainer.insertAdjacentHTML("beforeend", postElement);
    });

    // Update Pagination Info
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    pageNumber.textContent = `${currentPage} of ${totalPages}`;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
}

// Pagination Controls
prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadPosts();
    }
});

nextPageButton.addEventListener("click", () => {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        loadPosts();
    }
});

// Search and Filter
searchInput.addEventListener("input", () => {
    currentPage = 1;
    loadPosts();
});

categoryFilter.addEventListener("change", () => {
    currentPage = 1;
    loadPosts();
});

// Initialize Page
loadPosts();

function renderBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    blogPosts.forEach(post => {
        const postHTML = `
            <div class="blog-post">
                <img src="${post.image}" alt="${post.title}" class="blog-image" onerror="this.src='images/default-image.jpg';">
                <div class="blog-content">
                    <h2>${post.title}</h2>
                    <p class="category">${post.category}</p>
                    <p class="author-date">By ${post.author} | ${post.date}</p>
                    <p>${post.content}</p>
                    <div class="meta">
                        <span class="views">👁️ ${post.views} Views</span>
                        <div class="share-icons">
                            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://example.com')}" target="_blank">🐦</a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://example.com')}" target="_blank">📘</a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://example.com')}&title=${encodeURIComponent(post.title)}" target="_blank">💼</a>
                        </div>
                    </div>
                </div>
            </div>`;
        blogContainer.innerHTML += postHTML;
    });
}

renderBlogPosts();

