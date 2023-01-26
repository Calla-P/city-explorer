import React from 'react';
import './Map.css';

class Map extends React.Component {
    render() {
        let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&markers=icon:small-red-cutout|${this.props.lat},${this.props.lon}`

        return(
            this.props.city_name.length < 1 ?
            <div id="mapImg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/World_map_with_equator.jpg" alt="World Map" title="this is a map"/>
            </div> :
            <div id="mapImg">
                <img src={mapURL} alt={this.props.city_name} title={this.props.city_name}/>
            </div>
        )
    };
};


export default Map;