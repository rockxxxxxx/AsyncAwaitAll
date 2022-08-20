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

getPost();

const postF = async function () {
  const createPost = function (post) {
    setTimeout(function (resolve, reject) {
      resolve(posts.push(post));
    }, 1000);
  };
};

postF({ title: "Post 3", data: "This is post 3" }).then(getPost);
