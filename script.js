const jokeDOM = document.querySelector("#chuck-norris p");
const btnFetch = document.querySelector(".btn-gradient");
const btnAxios = document.querySelector(".btn-gradient.orange");
const avatar = document.querySelector(".avatar img");
console.log(avatar.src);

btnFetch.addEventListener("click", () => {
  fetchJoke();
});

btnAxios.addEventListener("click", () => {
  axiosCAll();
});

function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(data => data.json())
    .then(joke => {
      avatar.src = joke.icon_url;
      jokeDOM.textContent = joke.value;
    })
    .catch(err => console.log("something when wrong"));
}

fetchJoke();

// Axios
function axiosCAll() {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(response => response)
    .then(response => {
      jokeDOM.textContent = response.data.value;
      avatar.src = response.data.icon_url;
    })
    .catch(error => console.log(error))
    .finally(function() {
      // always executed
    });
}
