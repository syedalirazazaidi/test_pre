import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// var =>functional scope;
// let => block scope
// const =>block scope
// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayHello();
// THIS keywork refrence of the current object or a refrence to object
// jo object hai us ka refrence
// const person = {
//   walk() {
//     setTimeout(function () {
//       console.log(this);
//     }, 1000);
//   },
// };
// person.walk();

// destructing
// const obj1 = {
//   first: "ali",
//   last: "zaidi",
//   degree: "master",
// };
// const { first: ft, last, degree } = obj1;
// console.log(ft, ";;;;");
// spread operator combining array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newarr = [...arr1, "ali", ...arr2];
// console.log(newarr);
// spread operator combining object
// const obj1 = {
//   first: "ali",
// };
// const obj2 = {
//   last: "raza",
// };
// const newObj = { ...obj1, ...obj2, location: "australi" };
// console.log(newObj);

// --------------IMPERATIVE CODE----------------------

// const toggleLike = (id) => {
//   setMovie((pre) => {
//     const newMovie = [];
//     for (let i = 0; i < pre.length; i++) {
//       const currentMovie = pre[i];
//       if (currentMovie._id === id) {
//         const updated = {
//           ...currentMovie,
//           liked: !currentMovie.liked,
//         };
//         newMovie.push(updated);
//       } else {
//         newMovie.push(currentMovie);
//       }
//     }
//     return newMovie;
//   });
// };
