document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------
    // 1️⃣ Fetch latest Substack blog posts
    // ----------------------------
    async function fetchBlogPosts() {
        try {
            const response = await fetch(
                'https://api.rss2json.com/v1/api.json?rss_url=https://culturist.substack.com/feed'
            );
            const data = await response.json();

            if (data.status === 'ok' && data.items && data.items.length > 0) {
                const blogContainer = document.getElementById('blog-posts');
                if (!blogContainer) return;

                const postsToShow = data.items.slice(0, 3);

                postsToShow.forEach(post => {
                    const blogPost = document.createElement('div');
                    blogPost.className = 'bg-[#f8f9fa] rounded-lg overflow-hidden hover:shadow-md transition';
                    blogPost.innerHTML = `
                        <div class="h-48 bg-[#c7cdbf] overflow-hidden">
                            <img src="${post.thumbnail || 'http://static.photos/education/640x360/1'}" alt="${post.title}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-[#415232] mb-2">${post.title}</h3>
                            <p class="text-[#000000] text-sm mb-4">${new Date(post.pubDate).toLocaleDateString()}</p>
                            <p class="text-[#000000] mb-4 line-clamp-2">${post.description.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
                            <a href="${post.link}" target="_blank" rel="noopener" class="text-[#763e19] font-medium hover:underline inline-flex items-center gap-1">
                                Read More <i data-feather="arrow-right" class="w-4 h-4"></i>
                            </a>
                        </div>
                    `;
                    blogContainer.appendChild(blogPost);
                });

                // Refresh Feather icons for blog arrows
                if (window.feather) {
                    window.feather.replace();
                }
            }
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    }

    fetchBlogPosts();

    // ----------------------------
    // 2️⃣ Accessibility: Skip link
    // ----------------------------
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // ----------------------------
    // 3️⃣ Highlight current page in navbar
    // ----------------------------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('custom-navbar a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (
            linkHref === currentPage ||
            (currentPage === 'index.html' && linkHref === '/')
        ) {
            link.setAttribute('aria-current', 'page');
        }
    });

    // ----------------------------
    // 4️⃣ Initialize Feather icons for any other icons outside the Shadow DOM
    // ----------------------------
    if (window.feather) {
        window.feather.replace();
    }

});
