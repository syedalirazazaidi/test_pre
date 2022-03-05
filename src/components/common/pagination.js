import React, { useState } from "react";
import Like from "./like";

const Pagination = ({
  data,
  RenderComponent,

  pageLimit,
  dataLimit,
  setMovie,
}) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  //   function changePage(event) {
  //     const pageNumber = Number(event.target.textContent);
  //     setCurrentPage(pageNumber);
  //   }
  //   console.log(data, "o");
  console.log(data, "LLLLLLOO");
  const toggleLike = (id) => {
    console.log(id);
    setMovie((pre) => {
      return pre.map((move) =>
        move._id === id ? { ...move, liked: !move.liked } : move
      );
    });
  };
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const deleteButton = (id) => {
    setMovie(data.filter((del) => del._id !== id));
  };
  return (
    <div>
      {/* <p>there are {movie.length} in the data base</p> */}
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
          {getPaginatedData().map((data) => {
            return (
              <tr key={data._id}>
                <td>{data.title}</td>

                <td>{data.genre.name}</td>
                <td>{data.numberInStock}</td>
                <td>{data.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={data.liked}
                    handleClick={toggleLike}
                    id={data._id}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteButton(data._id)}
                  >
                    Danger
                  </button>
                </td>
              </tr>
            );
            // data?.map((movie) => {
            //   return (
            //     <tr key={movie._id}>
            //       <td>{movie.title}</td>

            //       <td>{movie.genre.name}</td>
            //       <td>{movie.numberInStock}</td>
            //       <td>{movie.dailyRentalRate}</td>
            //       <td>
            //         {/* <Like
            //           liked={movie.liked}
            //           handleClick={toggleLike}
            //           id={movie._id}
            //         /> */}
            //       </td>
            //       <td>
            //         {/* <button
            //           type="button"
            //           className="btn btn-danger"
            //           onClick={() => deleteButton(movie._id)}
            //         >
            //           Danger
            //         </button> */}
            //       </td>
            //     </tr>
            //   );
            // });
          })}
          {/* <RenderComponent key={idx} data={d} /> */}
          {/* {movie.map((movie) => {
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
          })} */}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li> */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}
          {/* <li className="page-item">
            <a className="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
