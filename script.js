
async function getAllPosts(userId) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    let posts = await response.json();
    document.querySelector(".right").innerHTML = "";
    for (post of posts) {
        let content = `
                    <div class="box">
                        <p class="title">${post.title}</p>
                        <p class="body">${post.body}</p>
                   </div>  
        `
        document.querySelector(".right").innerHTML += content;
    }

}

async function getAlluser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    for (user of users) {
        let content = `
                <div class="name" onClick="userClick(${user.id},this)">
                <i class="fa-solid fa-circle-user"></i>
                    <h4>${user.name}</h4>
                    <p>${user.email}</p>
                </div> 
    `;
        document.querySelector(".left").innerHTML += content;
    }
}

getAlluser();
function userClick(id, color) {
    getAllPosts(id);
    let colorRed = document.querySelectorAll(".name")
    colorRed.forEach(us => {
        us.classList.remove("selected")
    })
    color.classList.add("selected")

}
