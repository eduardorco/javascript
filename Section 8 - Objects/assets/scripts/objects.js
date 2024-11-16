const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    //! Check se tem a propriedade
    if ('info' in movie) {
    }
    if (!('info' in movie)) {
    }

    //! Escolhe a Key do Objeto
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    //! Escolhe o Value dentro da Key
    // const { title: movieTitle } = info;
    // let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);

    let text = getFormattedTitle().call(movie) + ' - '; //comma separated list for arguments
    // let text = getFormattedTitle().apply(movie, []) + ' - '; //pass an array for the arguments

    for (const key in info) {
      //! JS transforma propriedades de objeto em string
      //! Utilizavel em inputs opcionais
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        this.title = val
      }
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    //! THIS é o SELF do python. A diferença é onde é utilizado
    //* Podemos adicionar um metodo no objeto (funcao), sem utilizar => e o :
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovies();
};

//!Arrow functions dont work with 'this' inside. Will get global object (Windown)
//! this binda uma funcao ao objeto, um metodo. Porem depende da forma que é chamado
//! uma jogada é utilizar => quando uma funcao chama outra
const searchMovieHandler = function () {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
