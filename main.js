const URL = ' http://localhost:4444/users';
const URL1 = 'http://localhost:4444/users/3';
const URL2 = 'http://localhost:4444/users/6'

const searchName = document.getElementById('namee');
const searchUsern = document.getElementById('usernamee');
const searchEmail = document.getElementById('emaill');

const btn = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3')



const create = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, option).then(response => response.json())
}

btn.addEventListener('click', create)

const change = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL1, option).then(response => response.json())
}

btn2.addEventListener('click', change)

const udalit = () => {
    const data = {
        name: searchName.value,
        username: searchUsern.value,
        email: searchEmail.value
    }

    let option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL2, option).then(response => response.json())
}

btn3.addEventListener('click', udalit)



// const baseURL = "https://jsonplaceholder.typicode.com";
//
// const endpoints = {
//  posts: "/posts",
//  post: (id) => `/posts/${id}`
// };
//
// const getAllPosts = () => {
//  fetch(`${baseURL}${endpoints.posts}`, {
//   method: 'GET',
//  }).then((response) => {
//   return response.json();
//  }).then(data => {
//   console.log(data);
//  });
// }
//
// getAllPosts();
//
//
// const post = {
//  userId: 10,
//  title: "Hello, World!",
//  body: "its body"
// }
//
// const createPost = (post) => {
//  fetch(`${baseURL}${endpoints.posts}`, {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//    'Content-Type': 'application/json'
//   }
//  }).then((response) => {
//   return response.json();
//  }).then(data => {
//   console.log(data);
//  })
// }
//
// createPost(post);
//
//
// const updatePost = (post_id, post_obj) => {
//  fetch(`${baseURL}${endpoints.post(post_id)}`, {
//   method: 'PUT',
//   body: JSON.stringify(post_obj),
//   headers: {
//    'Content-Type': 'application/json'
//   }
//  }).then((response) => {
//   return response.json();
//  }).then(data => {
//   console.log(data)
//  })
// }
//
// updatePost(1, post);
//
// const deletePost = (post_id) => {
//  fetch(`${baseURL}${endpoints.post(post_id)}`, {
//   method: 'DELETE'
//  }).then((response) => {
//   console.log(response)
//  })
// }
//
// deletePost(2);