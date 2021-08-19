import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";
import PopUp from "./Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("avengers");
  }

  //using jQuery for retrieving search data
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=cc1d490aeebd4ba588b300185f147b14&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data successfully");
        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      },
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "98%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }}
          placeholder="enter movie title"
          onChange={this.searchChangeHandler.bind(this)}
        />
        <PopUp />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
