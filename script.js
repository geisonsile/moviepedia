document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const moviesContainer = document.querySelector('#movies-container');
    const loader = document.querySelector('#loader');
    
    //URL base da API (do TMDB)
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    searchForm.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        
        const searchTerm = searchInput.value;
        if (searchTerm) {
            moviesContainer.innerHTML = ''; // Limpa os resultados anteriores
            loader.style.display = 'flex'; // MOSTRA o loader

            getMovies(API_URL + '&query=' + searchTerm);
        } else {
            moviesContainer.innerHTML = '<p>Por favor, digite algo na busca.</p>';
            loader.style.display = 'none';
        }
    });

    async function getMovies(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                showMovies(data.results);
            } else {
                moviesContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
            }

        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            moviesContainer.innerHTML = '<p>Erro ao carregar os filmes. Tente novamente.</p>';
        }
        finally {
            loader.style.display = 'none';
        }
    }

    function showMovies(movies) {
        movies.forEach(movie => {
            const { title, poster_path, overview, vote_average } = movie;

            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            const poster = poster_path ? `${IMG_URL}${poster_path}` : 'https://placehold.co/200x300?text=Sem+Imagem';
            
            movieCard.innerHTML = `
                <img src="${poster}" alt="${title}">
                <h3>${title}</h3>
                <div class="movie-info">
                    <span>${vote_average.toFixed(1)}</span>
                </div>
            `;
            
            moviesContainer.appendChild(movieCard);
        });
    }

});