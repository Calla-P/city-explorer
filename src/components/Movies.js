import React from 'react';
import Movie from 'Movie.js';
import './Movie.css';


class Movies extends React.Component {

    render() {

        return(
            <div id="movies">
                <section id="moviePlace">
                    <h3>Top Movies Featuring {this.props.city}</h3>
                    <div id='recommendations'>{this.props.movie.map((movies,idx) => (
                        <Movie
                        title={movies.title}
                        poster={movies.imgPath}
                        overview={movies.overview}
                        rating={movies.averageRating}
                        review={movies.totalReviews}
                        releaseDate={movies.releaseDate}
                        key={idx}/>
                    ))
                }
                  </div>
                </section>
             </div>
        );
    };
};

export default Movies;