import React from 'react';
import './Weather.css'
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class Weather extends React.Component {

    render(){

        return(
     
            <div id="dailyForecast">
                <section>
                    <h2> Three Days of Weather </h2>
                    <div id='weather'>
                        {this.props.weather.map((day,idx) => (
                            <article key={idx}>
                                <h3>{day.date}</h3>
                                <p>{day.description}</p>
                            </article>
                        ))
                        }
                    </div>


                </section>
            </div>
        );
    };
};

   //     <div id="dailyForecast">
        //     <div id="showWeatherButton">
        //       <Button variant="primary" onClick={this.props.handleOpenModal}>View Predicted Forecast</Button>
        //     </div>
        //     <Modal
        //       show={this.props.show}
        //       onHide={this.props.onHide}>

        //         <Modal.Header closeButton>
        //           <Modal.Title>Three Day forecast for {this.props.city}</Modal.Title>
        //         </Modal.Header>

        //         <Modal.Body>
        //           {this.props.weather.map()}
        //         </Modal.Body>

        //     </Modal>
        //   </div>


export default Weather;