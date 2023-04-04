const url = "http://localhost:8888/fedup/wp-json/wp/v2/posts";
const container = document.querySelector("#post-container");

async function fetchBlog() {
  const response = await fetch(url);
  const blog = await response.json();

  console.log(blog);

  for (let i = 0; i < blog.length; i++) {
    const post = blog[i];

    const mediaUrl = `http://localhost:8888/fedup/wp-json/wp/v2/media/${post.featured_media}`;
    const mediaResponse = await fetch(mediaUrl);
    const media = await mediaResponse.json();
    const imageUrl = media.source_url;

    container.innerHTML += `
    <div class="col">
      <div class="card h-100">
        <img src="${imageUrl}" class="card-img-top" alt="${post.title.rendered}">
        <div class="card-body">
          <h5 class="card-title">${post.title.rendered}</h5>
          <p class="card-text">${post.excerpt.rendered}</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;
  }
}

fetchBlog();
