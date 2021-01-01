import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './maps.css';
const mapStyles = {
  width: '100%',
  height: '80%',
};
class Maps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="maps">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{lat: 47.444, lng: -122.176}}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE',
})(Maps);
