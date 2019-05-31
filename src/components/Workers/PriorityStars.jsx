import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class PriorityStars extends Component {
  state = {
    rating: 0
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="priority-stars">
        <h6>Set Priority</h6>
        <StarRatingComponent
          name="rate1"
          starCount={3}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    )
  }
}

export default PriorityStars;