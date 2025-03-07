# Personal Blog Website

A simple personal blog website built with HTML, CSS, and JavaScript.

## Overview

This is a lightweight blog website that allows you to publish and display multiple blog posts. It features a responsive design that works on all devices and requires no frameworks or libraries.

## Files and Structure

- `index.html` - The homepage with featured and recent posts
- `styles.css` - Main stylesheet for the entire website
- `script.js` - JavaScript file that loads blog posts on the homepage
- `posts/` - Folder containing all blog post pages
  - `post1.html` - Example blog post
  - `post-styles.css` - Styles specific to blog post pages

## How to Use

1. Download all files and keep the folder structure intact
2. Open `index.html` in a web browser to view the website

## Adding New Blog Posts

1. Create a new HTML file in the `posts` folder (e.g., `post2.html`)
2. Copy the structure from `post1.html` and replace the content with your own
3. Add your new post to the `blogPosts` array in `script.js`:

```javascript
{
  id: 2,
  title: "Your New Post Title",
  date: "March 10, 2025",
  excerpt: "Brief description of your post...",
  image: "/placeholder.svg?height=200&width=300",
  url: "posts/post2.html"
}