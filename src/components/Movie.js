import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
      <>
        <Card key={this.props.idx}>
          <Card.Img variant="top" id={this.props.title} alt={this.props.title} src={this.props.poster}/>
          <Card.Body>
            <div id="title">
              <Card.Title>{this.props.title}</Card.Title>
            </div>
            <div id="overview">
              <h5>Overview:</h5>
              <p>{this.props.overview}</p>
            </div>
            <div id="rating">
              <h5>Rating:</h5> 
              <p>{this.props.rating}</p>
            </div>
            <div id="reviews">
              <h5>Reviews:</h5> 
              <p>{this.props.review}</p>
            </div>
            <div id="releaseDate">
              <h5>Release Date:</h5>
              <p>{this.props.releaseDate}</p>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  };
};

export default Movies;