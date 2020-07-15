import React from "react";

class SearchBar extends React.Component {
  state = { termino: "" };

  onInputChange = (event) => {
    this.setState({ termino: event.target.value });
    console.log(event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.termino);
    this.props.onSubmit(this.state.termino);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="textoBuscar">Búsqueda de imágenes: </label>
          <div className="ui left icon fluid action input">
            <i className="search icon"></i>
            <input
              type="text"
              value={this.state.termino}
              id="textoBuscar"
              placeholder="Dígite las palabras a buscar"
              onChange={this.onInputChange}
            />
            <button className="ui button">Buscar</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
