const posts = [
  { title: "Post 1", data: "This is post 1" },
  { title: "Post 2", data: "This is post 2" },
];

function getPost() {
  let data = "";
  setTimeout(function () {
    for (let i = 0; i < posts.length; i++) {
      data = data + `<li>${posts[i].title}:-${posts[i].data}</li>`;
    }
    document.body.innerHTML = data;
  }, 3000);
}

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.pop();
      resolve();
    }, 2000);
  });
}

async function cdg() {
  let create = await createPost({ title: "Post 3", data: "This is post 3" });
  let delte = await deletePost();
  create = await createPost({ title: "Post 4", data: "This is post 4" });
  getPost();
}

cdg();
