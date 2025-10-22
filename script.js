document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const moviesContainer = document.querySelector('#movies-container');
    
    //URL base da API (do TMDB)
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    searchForm.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        
        const searchTerm = searchInput.value;
        if (searchTerm) {
            getMovies(API_URL + '&query=' + searchTerm);
        } else {
            moviesContainer.innerHTML = '<p>Por favor, digite algo na busca.</p>';
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
    }

    function showMovies(movies) {
        moviesContainer.innerHTML = ''; 

        movies.forEach(movie => {
            const { title, poster_path, overview } = movie;

            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            // Lidar com poster faltando (muito comum!)
            const poster = poster_path ? `${IMG_URL}${poster_path}` : 'https://placehold.co/200x300?text=Sem+Imagem';

            // Preenche o HTML interno do card
            // (Isso é mais rápido que criar cada H3, P, etc. com createElement)
            movieCard.innerHTML = `
                <img src="${poster}" alt="${title}">
                <h3>${title}</h3>
                <div class="movie-info">
                    <span>${vote_average.toFixed(1)}</span>
                </div>
            `;
            
            // "Instancia" o card na tela
            moviesContainer.appendChild(movieCard);
        });
    }

});