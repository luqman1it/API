function getAllPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request.responseType = "json"
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = function () {
        let posts = request.response;
        document.querySelector(".right").innerHTML = "";

        if (request.status >= 200 && request.status < 300) {
            for (post of posts) {
                let content = `
                <div class="box">
                    <p class="title">${post.title}</p>
                    <p class="body">${post.body}</p>
               </div>  `
                document.querySelector(".right").innerHTML += content;
            }

        } else {
            alert("error get")
        }
    }
}
function getAlluser() {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/users`);
    request.responseType = "json"
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = function () {
        let users = request.response;

        if (request.status >= 200 && request.status < 300) {

            for (user of users) {
                let content = `
                <div class="name" onClick="userClick(${user.id},this)">
                <i class="fa-solid fa-circle-user"></i>
                    <h4>${user.name}</h4>
                    <p>${user.email}</p>
                </div> `
                document.querySelector(".left").innerHTML += content;
            }

        } else {
            alert("error get")
        }
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