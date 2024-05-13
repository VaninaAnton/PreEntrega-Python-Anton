document.addEventListener('DOMContentLoaded', async () => {
  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const fantasyMovies = await fetchData('/data/fantasy-movies.json');
  const animatedMovies = await fetchData('/data/animated-movies.json');
  const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  const renderMovieCards = (container, movies) => {
    container.innerHTML = '';
    movies.forEach(movie => {
      const isFavorite = favoriteMovies.some(favMovie => favMovie.title === movie.title);
      const card = `
        <div class="card">
          <img src="${movie.image}" alt="${movie.title}">
          <h5 class="card-title">${movie.title}</h5>
          <div class="button-container">
            <button class="btn ${isFavorite ? 'btn-danger remove-btn' : 'btn-primary add-btn'}">
              ${isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', card);
    });
  };
  
    const fantasyContainer = document.getElementById('fantasyMovies');
  const animatedContainer = document.getElementById('animatedMovies');
  const favoriteContainer = document.getElementById('favoriteMovies');

  renderMovieCards(fantasyContainer, fantasyMovies);
  renderMovieCards(animatedContainer, animatedMovies);
  renderMovieCards(favoriteContainer, favoriteMovies);

  document.addEventListener('click', async (event) => {
    if (event.target.matches('.add-btn, .remove-btn')) {
      const movieTitle = event.target.closest('.card').querySelector('.card-title').textContent;
      const isFavorite = favoriteMovies.some(movie => movie.title === movieTitle);

      if (!isFavorite) {
        const movie = { title: movieTitle };
        favoriteMovies.push(movie);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Película agregada a favoritos con éxito',
        })
      } else {
        const index = favoriteMovies.findIndex(movie => movie.title === movieTitle);
        favoriteMovies.splice(index, 1);
      }

      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
      renderMovieCards(favoriteContainer, favoriteMovies);
    }
  });
});


