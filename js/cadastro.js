const form = document.getElementById('form');
const message = document.getElementById('message');
const movieList = document.getElementById('movieList');
let movies = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const director = document.getElementById('director').value;
  const year = document.getElementById('year').value;

  if (title && director && year) {
    const movie = {
      title,
      director,
      year
    };
    movies.push(movie);
    displayMovies();
    message.innerText = 'Filme cadastrado com sucesso!';
    form.reset();
  } else {
    message.innerText = 'Por favor, preencha todos os campos.';
  }
});

function displayMovies() {
  movieList.innerHTML = '';
  movies.forEach(function(movie, index) {
    const movieItem = document.createElement('div');
    movieItem.innerHTML = `
    <div class="movie-items">
      <p><strong>Título:</strong> ${movie.title}</p>
      <p><strong>Diretor:</strong> ${movie.director}</p>
      <p><strong>Ano:</strong> ${movie.year}</p>
      <button onclick="deleteMovie(${index})">Excluir</button>
      </div>
    `;
    movieList.appendChild(movieItem);
  });
}

function deleteMovie(index) {
  movies.splice(index, 1);
  displayMovies();
}

function searchMovies() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const filteredMovies = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchValue) || movie.director.toLowerCase().includes(searchValue);
  });
  movieList.innerHTML = '';
  filteredMovies.forEach(function(movie) {
    const movieItem = document.createElement('div');
    movieItem.innerHTML = `
      <p><strong>Título:</strong> ${movie.title}</p>
      <p><strong>Diretor:</strong> ${movie.director}</p>
      <p><strong>Ano:</strong> ${movie.year}</p>
    `;
    movieList.appendChild(movieItem);
  });
}


function displayMovies() {
    movieList.innerHTML = '';
    movies.forEach(function(movie, index) {
      const movieItem = document.createElement('div');
      movieItem.innerHTML = `
        <p><strong>Título:</strong> ${movie.title}</p>
        <p><strong>Diretor:</strong> ${movie.director}</p>
        <p><strong>Ano:</strong> ${movie.year}</p>
        <button onclick="deleteMovie(${index})">Excluir</button>
      `;
      movieList.appendChild(movieItem);
    });
  }