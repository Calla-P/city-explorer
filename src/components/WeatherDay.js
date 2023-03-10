import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class WeatherDay extends React.Component {

    render() {

        return(
            
          <Accordion.Item eventKey={this.props.idx}>

            <Accordion.Header>
                {this.props.day.date}
            </Accordion.Header>

            <Accordion.Body>
                {this.props.day.wholeDescription}
            </Accordion.Body>

          </Accordion.Item>

        );
    };
};

export default WeatherDay;