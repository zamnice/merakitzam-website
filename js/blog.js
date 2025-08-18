// Load blog posts
document.addEventListener('DOMContentLoaded', function() {
  fetchBlogPosts();
  setupSearch();
  setupFilters();
});

async function fetchBlogPosts() {
  try {
    const response = await fetch('/content/blog/index.json');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }
}

function displayPosts(posts) {
  const container = document.getElementById('blogContainer');
  container.innerHTML = '';
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  posts.forEach(post => {
    const postEl = document.createElement('article');
    postEl.className = 'bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300';
    postEl.innerHTML = `
      <img src="${post.thumbnail || post.featured_image}" alt="${post.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <div class="flex flex-wrap gap-2 mb-3">
          ${post.categories.map(cat => 
            `<span class="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">${cat}</span>`
          ).join('')}
        </div>
        <h2 class="font-heading text-xl font-bold mb-3">${post.title}</h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${post.excerpt}</p>
        <div class="flex justify-between items-center">
          <a href="/blog/${post.slug}" class="text-primary font-medium">Baca Selengkapnya</a>
          <span class="text-xs text-gray-500">${new Date(post.date).toLocaleDateString('id-ID')}</span>
        </div>
      </div>
    `;
    container.appendChild(postEl);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const posts = document.querySelectorAll('#blogContainer article');
    
    posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const excerpt = post.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
}

function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      filterPosts(filter);
    });
  });
}

function filterPosts(filter) {
  // In a real implementation, you would refetch or filter existing posts
  console.log('Filtering by:', filter);
  // This would be implemented based on your static site generator
}
