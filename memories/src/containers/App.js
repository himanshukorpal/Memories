import React, { Component } from "react";
import CardList from "../components/CardList";
import { pictures } from "../components/pictures";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: pictures,
      searchfield: "",
      searchfieldYear: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredPictures = this.state.pictures.filter((picture) => {
      return picture.album
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Memories</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList pictures={filteredPictures} />
      </div>
    );
  }
}

export default App;
