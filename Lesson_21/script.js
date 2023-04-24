// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// CRUD

// R - GET
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   C - POST

// const options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Hello from JS",
//     body: "qweryuiqWAERTY",
//     userId: 12,
//   }),
// };

// fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then(resp =>{
//     if(!resp.ok){
//         throw new Error(resp.statusText)
//     }
//     return resp.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))

const addPost = document.querySelector(".js-add");
const listPosts = document.querySelector(".js-posts");
const formWrapper = document.querySelector(".js-form");
const errMessage = document.querySelector(".js-error");

addPost.addEventListener("click", handlerAddPost);

function handlerAddPost() {
  formWrapper.innerHTML = `<form action="submit" class="js-form-add" style:"style="display: flex; flex-direction: column"
"  >
        <input type="text" name="name">
        <textarea name="description" cols="30" rows="10"></textarea>
        <button>Додати пост</button>
    </form>`;

  const form = document.querySelector(".js-form-add");
  form.addEventListener("submit", handlerFormSubmit);
}

function handlerFormSubmit(evt) {
  evt.preventDefault();
  //   const data = new FormData(evt.currentTarget)
  //   for (var key of data.keys()) {
  //     console.log(key);
  //  }
  //   console.log();
  // data.forEach(elem => console.log(elem))

  //   const { name, description } = evt.currentTarget.elements;

  const {
    name: { value: title },
    description: { value: body },
  } = evt.currentTarget.elements;
  //   const data = {
  //     title: name.value,
  //     body: description.value,
  //   };
  const data = { title, body };

  addPostService(data)
    .then((obj) => {
      listPosts.insertAdjacentHTML("beforeend", createPostMarkup(obj));
      // listPosts.innerHTML = createPostMarkup(obj)
    })
    .catch(() => {
      errMessage.innerHTML = "Не можливо додати пост";
    })
    .finally(() => {
      formWrapper.innerHTML = "";
      setTimeout(() => {
        errMessage.innerHTML = "";
      }, 2000);
    });
}

function createPostMarkup({ id, title, body }) {
  return `<li data-id="${id}">
    <h2>${title}</h2>
    <p>${body}</p>
    </li>`;
}

function addPostService(data) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

// ПЕРЕРВА ДО 21.25

// U PUT PATCH

// PUT
// {
//     id:101,
//     title: 'Hello fish',
//     body: "Hello dog",
//     userId : 1
// }

// {
//     id:101.
//     title: 'Hello fish'
// }

//PATCH

// {
//     id:101,
//     title: 'Hello fish',
//     body: "Hello dog",
//     userId : 1
// }

// {
//     id:101.
//     title: 'Hello fish'
// }

// const options = {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "cat",
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
// .then(resp => resp.json()).then(data => console.log(data));


// const options = {
//     method: "PATCH",
//     body: JSON.stringify({
//       id: 1,
//       title: "cat",
//       body : 'Hello dear cat',
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts/1',options)
//   .then(resp => resp.json()).then(data => console.log(data)).then(err => console.log(err));

// const options ={
//     method: "DELETE"
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
// .then(resp => console.log(resp))
