import { useMovies } from "../hooks/useMovies";
import { Buscador } from "./Buscador";
import { Movies } from "./Movies";
import "./styles/App.css";

function App() {
  const { movies, setSearch, setOrder } = useMovies();

  return (
    <div className="col-md-10 container">
      <h1>Buscador de Películas</h1>
      <header className="mt-3">
        <Buscador cbSetSearch={setSearch} cbSetOrder={setOrder} />
      </header>
      <main className="main mt-3">
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
