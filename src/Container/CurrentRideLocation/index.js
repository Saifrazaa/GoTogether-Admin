import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import CarIcon from "../../Assets/images/map_car_logo.png";

class CurrentRideLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: props.location.state && props.location.state.latitude || 0,
            longitude: props.location.state && props.location.state.longitude || 0,
        }
    }
    render() {
        const google = this.props.google;
        return (
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    position={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    name={'Current location'}
                    icon={{
                        url: CarIcon,
                        scaledSize: new google.maps.Size(50, 80)
                    }}
                />

            </Map >
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCYjvdwjjkFNhXdFVKYy5CPslDFJDzKvvc")
})(CurrentRideLocation);