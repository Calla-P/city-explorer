import React from 'react';
import './Weather.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Accordion } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

    render() {

        return (
            <div id="dailyForecast">
                <div id="showWeatherButton">
                    <Button variant="primary" onClick={this.props.openModal}>View Predicted Forecast</Button>
                </div>
                 <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}>

                    <Modal.Header closeButton>
                        <Modal.Title>Three Day Forecast for {this.props.city}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Accordion defaultActiveKey='0'>
                        {this.props.weather.map((day, idx) => (
                            // <article key={idx}>
                            //     <h3>Date: {day.date}</h3>
                            //     <p>Description: {day.description}</p>
                            // </article>
                            <WeatherDay day={day} idx={idx}/>
                        ))
                        }
                        </Accordion>

                    </Modal.Body>

                </Modal>

            </div>
        );
    };
};


export default Weather;