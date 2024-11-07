document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id");

    fetch("../blogs.json")
        .then(response => response.json())
        .then(blogs => {
            const blog = blogs.find(b => b.id == blogId);
            if (blog) {
                document.getElementById("blog-title").textContent = blog.title;
                document.getElementById("blog-meta").textContent = `${blog.date} by ${blog.author}`;
                document.getElementById("blog-image").src = blog.image;
                document.getElementById("blog-excerpt").textContent = blog.excerpt;
                document.getElementById("blog-full-content").textContent = blog.content;
            } else {
                document.getElementById("blog-content").innerHTML = "<p>Blog not found.</p>";
            }
        })
        .catch(error => console.error("Error loading blog data:", error));
});
