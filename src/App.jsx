import "./App.css";

function App() {
  return <div className="page">
    <header>
      <h1>Buscador de películas</h1>
      <form className="form">
        <input type="text" className="input" placeholder="Escribe aquí tu película favorita" />
        <button type="submit" className="button">Buscar</button>
      </form>
    </header>

    <main>Lista de películas</main>
  </div>;
}

export default App;
