import React, { Component } from "react";
import Movie from "./components/movies";
class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="container">
          <Movie />
        </div>
      </main>
    );
  }
}

export default App;
