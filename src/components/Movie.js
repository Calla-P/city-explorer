import React from 'react';
// import './Movie.css';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import './Movie.css';


class Movies extends React.Component {
  render() {
    return (
      <>
      <Row sm={3} md={3}>  
      {this.props.movies.map((movie, idx) => (
        <Card className={'cards'}
        key={idx} 
        style={{
          display:'flex',
          justifyContent:'center',
          width:'30rem', 
          height:'10%',
          padding:'10px',
          margin:'42px',
          border:'20px',
          backgroundcolor:'grey'}}
          >
          <Card.Img variant="top" id={movie.title} alt={movie.title} src={movie.imgPath} 
          style={{height:'250px',
          width:'350px', 
          alignItems:'center'}}/>

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
      </Row>
      </>
    )
  };
};

export default Movies;