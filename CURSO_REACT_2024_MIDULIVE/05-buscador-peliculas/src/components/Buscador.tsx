import { useEffect, useRef, useState, type FormEvent } from "react";
import "./styles/Buscador.css";

export const Buscador = ({
  cbSetSearch,
  cbSetOrder,
}: {
  cbSetSearch: (value: string) => void;
  cbSetOrder: (value: boolean) => void;
}) => {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState(false);
  const [error, setError] = useState("");
  const previousSearch = useRef("");

  useEffect(() => {
    if (query.length > 0) {
      if (query.length < 3) {
        setError("La búsqueda debe tener al menos 3 caracteres");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  }, [query]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form: {
      [k: string]: FormDataEntryValue;
    } = Object.fromEntries(new window.FormData(e.target as HTMLFormElement));
    const query = form.query;
    const order = form.order !== undefined;

    console.log({ form, query, order });

    if ((query as string).length === 0) {
      setError("No se puede realizar la búsqueda con el campo vacío");
    } else if (query === previousSearch.current) {
      setError("Ya realizó esta búsqueda");
    } else {
      previousSearch.current = query as string;
      cbSetSearch(query as string);
      cbSetOrder(order as boolean);
    }
  };

  return (
    <form action="" className="header__form" onSubmit={handleSubmit}>
      <div className="input-group has-validation">
        <input
          name="query"
          onChange={handleQueryChange}
          type="text"
          className={`header__form-movie-search form-control ${
            error !== "" ? "is-invalid" : ""
          }`}
          placeholder="Titanic, Star Wars, Avengers..."
        />
        <button
          type="submit"
          className="header__form-movie-search-button btn btn-info"
        >
          Buscar
        </button>
        <div className="d-inline-flex flex-column justify-content-center align-items-center p-2">
          <label className="form-check-label" style={{ fontSize: "10px" }}>
            Ordenar
          </label>
          <input
            name="order"
            onChange={handleOrderChange}
            className="form-check-input"
            type="checkbox"
            title="ordenar"
          />
        </div>
        {error !== "" && (
          <div className={`${error !== "" ? "invalid-feedback" : "d-none"}`}>
            {error}
          </div>
        )}
      </div>
    </form>
  );
};
