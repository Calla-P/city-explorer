import React from 'react';
import Alert from 'react-bootstrap/Alert';
import './Location.css';

class Location extends React.Component {

    render(){
console.log(this.props.latitude);
        return(
            <>
            {this.props.isError === true ?
            <Alert variant="danger">
                <Alert.Heading>Zoinks! We have an error here.</Alert.Heading>
                <p>{this.props.errorMessage}</p>
            </Alert> :
            this.props.display_name ?
            <div id="locHeader">
                <h2>{this.props.display_name}</h2>
                <h3>Latitude:{this.props.latitude}</h3>
                <h3>longitude:{this.props.longitude}</h3>
            </div> : <h2>Let's Explore, It's fun.</h2>}
            </>
        )
    };
}

export default Location;