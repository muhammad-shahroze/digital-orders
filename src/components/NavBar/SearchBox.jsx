import React, {Component} from 'react';
import './NavBar.css';


class SearchBox extends Component {

  state = {
    initialState: "Search processes, workers, tags",
  }


  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="searchbar">
            <input className="search-input" type="text" name="search" placeholder={this.state.initialState} onChange={this.props.updateCurrentText}></input>
            <a href="search" className="search-icon"><i className="fas fa-search"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox;