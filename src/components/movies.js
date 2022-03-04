import React from "react";
import Like from "./common/like";
import { getMovies } from "./services/fakeMovieService";

function Movie() {
  const [movie, setMovie] = React.useState(getMovies());

  const deleteButton = (id) => {
    setMovie(movie.filter((del) => del._id !== id));
  };
  // should work single source of truth
  const toggleLike = (id) => {
    setMovie((pre) => {
      const newMovie = [];
      for (let i = 0; i < pre.length; i++) {
        const currentMovie = pre[i];
        if (currentMovie._id === id) {
          const updated = {
            ...currentMovie,
            liked: !currentMovie.liked,
          };
          newMovie.push(updated);
        } else {
          newMovie.push(currentMovie);
        }
      }
      return newMovie;
    });
  };

  if (movie.length === 0) return <p>no movie in the database</p>;
  return (
    <>
      <p>there are {movie.length} in the data base</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rental</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movie.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    handleClick={toggleLike}
                    id={movie._id}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteButton(movie._id)}
                  >
                    Danger
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Movie;
