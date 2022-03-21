const BlogContainer = document.querySelector("ol.blog-list-container");
const url = "https://dev.to/api/articles?username=pranish07";
fetch(url)
  .then((response) => response.json())
  .then((blogs) => {
    updateBlogList(blogs);
  });
function updateBlogList(blogs) {
  BlogContainer.innerHTML = blogs.map((post) => {
    return `<li class="blog-post"> 
        <div class="blog-post-container ">
        <h3 class="blog-title">${post.title}</h3>
        <p class="">${post.tag_list
          .map((tags) => {
            return `<span class="link-primary blog-tags">${tags}</span>`;
          })
          .join("")}</p>
        <img class="blog-image" src=${post.social_image}>
        <p class="blog-desc">${post.description}</p>
        <div class="blog-public">
            <div class="align-left">
            <p class="blog-date "> <i class="fas fa-calendar mr-2"></i>${
              post.readable_publish_date
            }</p>
                <p class="blog-time"> <i class="fas fa-clock mr-2"></i>${
                  post.reading_time_minutes
                } Minutes</p>
                <p class="blog-reaction"><i class="fas fa-thumbs-up mr-2"></i>${
                  post.positive_reactions_count
                } </p>
                <p class="blog-comments"><i class="fas fa-comment mr-2"></i>${
                  post.comments_count
                }</p>
            </div>
            <div >
                <a class="blog-url text-decoration-none link-primary" href=${
                  post.url
                } target="_blank">Read More</a>
            </div>   
        </div>
     </div>       
        </li>`
  });
}
