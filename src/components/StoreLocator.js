import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import Navbar from "./Navbar.js"
const mapStyles = {
  width: '60%',
  height: '60%',

};
class StoreLocator extends Component {


  constructor(props) {
    super(props);

    this.state = {
      stores: [
              {latitude: 39.359423, longitude: -123.021071},
              {latitude: 39.2052192687988, longitude: -123.988426208496},
              {latitude: 38.6307081, longitude: -123.1434325},
              {latitude: 39.3084488, longitude: -122.2140121},
              {latitude: 39.5524695, longitude: -121.0425407}],
      myLatLng: {
        lat: 0,
        lng: 0
      }
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => alert("You clicked me!")} />
    })
  }

  getLocation = () => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         position => {
           this.setState(prevState => ({
             currentLatLng: {
               ...prevState.currentLatLng,
               lat: position.coords.latitude,
               lng: position.coords.longitude
             },

           }))
         }
       )
     } else {
       console.log("error")
     }
   }

    componentDidMount(){
      this.getLocation();
      console.log(this.state.myLatLng)
    }


  render() {
    return (
<div><Navbar/>
  <div className="container">
      <div className= "row" id="map">
     <div className="col-6-lg" >
     <div className="centerBlock">
       <ul id="store-list">
         <li>store 1</li>
         <li>store 2</li>
         <li>store 3</li>
         <li>store 4</li>
        </ul>
        </div>
      </div>
          <div className="col-6-lg" >
  <Map
    google={this.props.google}
    zoom={8}
    style={mapStyles}

    center={this.state.myLatLng}
  >
    {this.displayMarkers()}
  </Map>
           </div>
       </div>
     </div>

  </div>



);
}
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyDySK3E9KkLRavps0lx1oY6L_DKKd4H8r0'
})(StoreLocator);
