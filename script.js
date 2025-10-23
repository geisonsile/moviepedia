document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const message = document.querySelector('#message');
    const moviesContainer = document.querySelector('#movies-container');
    const loader = document.querySelector('#loader');
    const modal = document.querySelector('#modal');
    const modalClose = document.querySelector('#modal-close');
    const modalPoster = document.querySelector('#modal-poster');
    const modalTitle = document.querySelector('#modal-title');
    const modalRating = document.querySelector('#modal-rating');
    const modalOverview = document.querySelector('#modal-overview');
    
    //URL base da API (do TMDB)
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
    const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

    searchForm.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        
        const searchTerm = searchInput.value;
        if (searchTerm) {
            message.innerHTML = '';
            moviesContainer.innerHTML = '';
            loader.style.display = 'flex';

            getMovies(SEARCH_URL + '&query=' + searchTerm);
        } else {
            moviesContainer.innerHTML = '';
            message.innerHTML = '<p>Por favor, digite algo na busca.</p>';
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
                message.innerHTML = '<p>Nenhum filme encontrado.</p>';
            }

        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            message.innerHTML = '<p>Erro ao carregar os filmes. Tente novamente.</p>';
        }
        finally {
            loader.style.display = 'none';
        }
    }

    function showMovies(movies) {
        moviesContainer.innerHTML = '';

        movies.forEach(movie => {
            const { title, poster_path, overview, vote_average } = movie;

            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            const poster = poster_path ? `${IMG_URL}${poster_path}` : 'https://placehold.co/200x300?text=Sem+Imagem';

            movieCard.dataset.title = title;
            movieCard.dataset.poster = poster;
            movieCard.dataset.rating = vote_average.toFixed(1);
            movieCard.dataset.overview = overview || 'Descrição não disponível.';
            
            movieCard.innerHTML = `
                <img src="${poster}" alt="${title}">
                <h3>${title}</h3>
                <div class="movie-info">
                    <span>⭐ ${vote_average.toFixed(1)}</span>
                </div>
            `;
            
            moviesContainer.appendChild(movieCard);
        });
    }

    function openModal(title, poster, rating, overview) {
        modalTitle.textContent = title;
        modalPoster.src = poster;
        modalRating.textContent = `Nota: ${rating} ⭐`;
        modalOverview.textContent = overview;
        
        // Mostra o modal
        modal.classList.add('show-modal');
    }

    function closeModal() {
        modal.classList.remove('show-modal');
    }

    moviesContainer.addEventListener('click', (evento) => {
        const clickedCard = evento.target.closest('.movie-card');
        
        // Se o clique não foi em um card, `clickedCard` será null
        if (!clickedCard) return; 

        const { title, poster, rating, overview } = clickedCard.dataset;
        
        // Abrimos o modal com esses dados
        openModal(title, poster, rating, overview);
    });

    modalClose.addEventListener('click', closeModal);

    //Fechar se clicar fora do modal (no fundo escuro)
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            closeModal();
        }
    });

    function fetchPopularMovies() {
        loader.style.display = 'flex';
        getMovies(POPULAR_URL);
    }
    
    fetchPopularMovies();

});