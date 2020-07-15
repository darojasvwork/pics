import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imagenes: [] };

  onSearchSubmit = async (termino) => {
    console.log(termino);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: termino },
      headers: {
        Authorization: "Client-ID 9tHx-LWmowvJJZQ06CoS5ZebWqaMPMU6TgzqksSJKko",
      },
    });
    this.setState({ imagenes: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui dividing header" style={{ marginTop: "10px" }}>
          Ejercicio de búsqueda de imágenes
        </div>
        {<SearchBar onSubmit={this.onSearchSubmit} />}
        <ImageList imagenes={this.state.imagenes} />
      </div>
    );
  }
}
export default App;
