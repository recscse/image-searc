import React, { Component } from "react";
import axios from "axios";
import ImageResults from "../imageResult/imageResult";

class Search extends Component {
  state = {
    searchText: "",
    apiURL: "https://pixabay.com/api",
    apiKey: "11869858-41c09c357f7e5885d1251c354",
    images: []
  };
  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <nav className="searchNav">
          <div style={{ backgroundColor: "white" }}>Search Photos</div>
          <input
            type="text"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px",
              height: "30px ",
              border: "2px solid blue"
            }}
            placeholder="Search for image"
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
          />
        </nav>
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
