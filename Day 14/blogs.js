const createNewBlog = document.getElementById('new-blog');
createNewBlog.addEventListener('click', () => {
    
    const blogTitle = document.getElementById('blog-title').value;
    const blogBody = document.getElementById('blog-body').value;

    const newBlog = {
        blogTitle: blogTitle,
        blogBody: blogBody
    }

    fetch("http://localhost:3000/blogs", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlog)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log("New Blog: ", newBlog);
    })
})

fetch("http://localhost:3000/blogs", {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        const blogList = document.getElementById('blog-list');
        const blog = document.createElement('div');
        const blogTitle = document.createElement('h2');
        const blogBody = document.createElement('p');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const br = document.createElement('br');

        editBtn.innerHTML = "Edit";
        deleteBtn.innerText = "Delete";
    
        blogTitle.innerText = element.blogTitle;
        blogBody.innerText = element.blogBody;
        blog.style.border = "1px dashed black";
        blog.append(blogTitle, blogBody, editBtn, deleteBtn);
        blogList.appendChild(blog);
        blogList.appendChild(br);
    });
})
.catch(error => console.error(error))