import React from 'react';
import './Movie.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class Movies extends React.Component {
  render() {
    return (
      <>
      <Col>
      {this.props.movies.map((movie, idx) => (
        <Card key={idx}>
          <Card.Img variant="top" id={movie.title} alt={movie.title} src={movie.imgPath}/>
          <Card.Body className={'moviecards'}>

            <div id="title">
              <Card.Title>
                {movie.title}
                </Card.Title>

            </div>

            <div id="overview">
              <h5>Overview:</h5>
              <p>{movie.overview}</p>
            </div>

            <div id="rating">
              <h5>Rating:</h5> 
              <p>{movie.averageRating}</p>
            </div>

            <div id="reviews">
              <h5>Reviews:</h5> 
              <p>{movie.totalReviews}</p>
            </div>

            <div id="releaseDate">
              <h5>Release Date:</h5>
              <p>{movie.releaseDate}</p>
            </div>
          </Card.Body>
        </Card>
      ))}
      </Col>
      </>
    )
  };
};

export default Movies;