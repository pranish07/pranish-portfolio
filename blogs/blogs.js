const BlogContainer = document.querySelector("ol.blog-list-container");
const url = "https://dev.to/api/articles?username=pranish07";
fetch(url)
.then(response => response.json())
.then(blogs=>{
    updateBlogList(blogs);
    console.log(blogs);
})
function updateBlogList(blogs){
    BlogContainer.innerHTML = blogs.map(post=>{
        return`<li class="blog-post"> 
        <div class="blog-post-container"></div>
        <h1 class="blog-title">${post.title}</h1>
        <p class="blog-tags">${
            post.tag_list.map(tags => {
                return `<span>${tags}</span>`
            }).join("") 
        }</p>
        <img class="blog-image" src=${post.social_image}>
        <p class="blog-desc">${post.description}</p>
<div class="blog-public">
        <p class="blog-date">${post.readable_publish_date}</p>
        <p class="blog-time">${post.reading_time_minutes} Minutes</p>
        <p class="blog-reaction">${post.positive_reactions_count} </p>
        <p class="blog-comments">${post.comments_count}</p>
        <a class="blog-url" href=${post.url}>Read More</a>
     </div>   
        
        
        </li>`
    })
}