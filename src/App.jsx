import "./App.css";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="Escribe aquí tu película favorita"
          />
          <button type="submit" className="button">
            Buscar
          </button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => {
              return (
                <li key={movie.imdbID} className="movie">
                  <h2>{movie.Title}</h2>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="empty">
            No hay películas que coincidan con la búsqueda
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
