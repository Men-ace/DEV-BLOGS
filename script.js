// Blog posts data
const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      date: "March 5, 2025",
      excerpt:
        "Web development is an exciting field that combines creativity with technical skills. In this post, I'll share my journey and some tips for beginners...",
      image: "/placeholder.svg?height=200&width=300",
      url: "posts/post1.html",
    },
    {
      id: 2,
      title: "CSS Tricks Every Developer Should Know",
      date: "March 1, 2025",
      excerpt:
        "CSS can be both powerful and frustrating. Here are some essential tricks that will make your styling workflow much smoother...",
      image: "/placeholder.svg?height=200&width=300",
      url: "posts/post2.html",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals Explained",
      date: "February 25, 2025",
      excerpt:
        "Understanding JavaScript fundamentals is crucial for any web developer. Let's explore the core concepts that will strengthen your programming skills...",
      image: "/placeholder.svg?height=200&width=300",
      url: "posts/post3.html",
    },
    {
      id: 4,
      title: "Building Responsive Websites",
      date: "February 20, 2025",
      excerpt:
        "In today's mobile-first world, responsive design is more important than ever. Learn how to create websites that look great on any device...",
      image: "/placeholder.svg?height=200&width=300",
      url: "posts/post4.html",
    },
    {
      id: 5,
      title: "Web Accessibility Best Practices",
      date: "February 15, 2025",
      excerpt:
        "Making your website accessible to everyone is not just good practice—it's essential. Discover how to improve your site's accessibility...",
      image: "/placeholder.svg?height=200&width=300",
      url: "posts/post5.html",
    },
  ]
  
  // Function to load blog posts
  function loadBlogPosts() {
    const postsContainer = document.getElementById("posts-container")
  
    // Clear any existing content
    postsContainer.innerHTML = ""
  
    // Add each post to the container
    blogPosts.forEach((post) => {
      const postElement = document.createElement("article")
      postElement.className = "post"
  
      postElement.innerHTML = `
        <img src="${post.image}" alt="Image for ${post.title}">
        <h3>${post.title}</h3>
        <p class="post-meta">Posted on ${post.date}</p>
        <p>${post.excerpt}</p>
        <a href="${post.url}" class="read-more">Read More</a>
      `
  
      postsContainer.appendChild(postElement)
    })
  }
  
  // Load posts when the page loads
  document.addEventListener("DOMContentLoaded", loadBlogPosts)
  
  