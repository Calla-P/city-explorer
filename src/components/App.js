import React from 'react';
import Header from './Header';
import Footer from './Footer.js';
import Location from './Location';
import Weather from './Weather';
import Map from  './Map';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: '',
      searchCity: '',
      display_name: '',
      lat: '',
      lon: '',
      isError: false,
      errorMessage: '',
      weatherData:'',
      isModalShown: false
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown:false
    });
  }

  handleOpenModal = () => {
    this.setState({
      isModalShown: true 
    });
  }


  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('search: ${this.state.searchCity');

      // LocationIQ data (Api Data)
      let key = process.env.REACT_APP_LOCATIONIQ_API_KEY;
      let location = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.searchCity}&format=json`;

      let locationData = await axios.get(location);

      this.handleWeather();

      //saving of the data
      console.log('locationData:', locationData.data[0]);
      this.setState({
        apiData: locationData.data[0],
        display_name: locationData.data[0].display_name,
        lat: locationData.data[0].lat,
        lon: locationData.data[0].lon,
        isError: false
      },()=> console.log(this.state.lat));

    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    };
  };


  handleWeather = async () => {
    try{  
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchCity}`;
      
      let weatherData = await axios.get(weatherURL);
      console.log(weatherData);
      this.setState({
        weatherData: weatherData.data
      });
    } catch(error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    };
  };


  handleCityInput = (e) => {
    console.log(this.state.searchCity);
    this.setState ({
      searchCity: e.target.value
    });
  };

  render() {
    return(
      <>
      <Header/>
      <Form onSubmit={this.handleSubmit}>
        <Form.Label html="cityInput">
          <Form.Control id="cityInput" placeholder="Enter a City" size="sm" onChange={this.handleCityInput}/>
        </Form.Label>
        <Button type="submit" variant="primary">Explore</Button>
      </Form>
      <Location
      isError={this.state.isError}
      errorMessage={this.state.errorMessage}
      display_name={this.state.display_name}
      latitude={this.state.lat}
      longitude={this.state.lon}/>

      {this.state.weatherData && <Weather weather={this.state.weatherData}
      city={this.searchCity}
      show={this.handleOpenModal}
      onHide={this.handleCloseModal}/>}

      <Map
      city_name={this.state.display_name}
      lat={this.state.lat}
      lon={this.state.lon}/>
      <Footer/>
      </>
    );
  };
  
}
export default App;
