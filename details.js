const url = "https://willyongaks.com/Fed_ups/wp-json/wp/v2/posts";
const container = document.querySelector(".details-container");
const URLParams = new URLSearchParams(window.location.search);
const postId = URLParams.get("id");

async function fetchBlog() {
  const response = await fetch(url);
  const blog = await response.json();

  console.log(blog);

  for (let i = 0; i < blog.length; i++) {
    const post = blog[i];

    if (post.id == postId) {
      const mediaUrl = `https://willyongaks.com/Fed_ups/wp-json/wp/v2/media/${post.featured_media}`;
      const mediaResponse = await fetch(mediaUrl);
      const media = await mediaResponse.json();
      const imageUrl = media.source_url;

      container.innerHTML += `
        <div class="hero-image" style="background-image: url(${imageUrl});"></div>
        <div class="container">
        <div class="row">
            <div class="col">
            <h1 class="card-title">${post.title.rendered}</h1>
            <p class="card-text">${post.content.rendered}</p>
            </div>
        </div>
        </div>
`;

    }
  }
}

fetchBlog();
