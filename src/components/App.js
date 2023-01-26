import React from 'react';
import Header from './Header';
import Footer from './Footer.js';
import Location from './Location';
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
      errorMessage: ''
    }
  }


  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('search: ${this.state.searchCity');

      // LocationIQ data (Api Data)
      let key = process.env.REACT_APP_LOCATIONIQ_API_KEY;
      let location = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.searchCity}&format=json`;

      let locationData = await axios.get(location);

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
