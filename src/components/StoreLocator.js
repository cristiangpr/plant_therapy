
import React, { Component } from 'react'
import { Map, Info, Search } from 'react-store-locator'
import Navbar from './Navbar.js'
import myPin from '../myPin'
import mapStyle from '../mapStyle.json'
import locations from '../locations'

import clusterMarker from '../cluster-marker'


class StoreLocator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			locations: locations,
			mapLoaded: false
		}

		this.getLocations = this.getLocations.bind(this)
	}

	getLocations(locations) {
		this.setState({ locations: locations })
		console.log(locations)
	}


	render() {
		const mapProps = {
			mapOptions: {
				styles: mapStyle,
				gestureHandling: `cooperative`,
				 fullscreenControl: false,
				 storeLocatorControl: false


			},
			onChange: this.getLocations,
			locations: this.state.locations,
			mapLoaded: () => {
				this.setState({ mapLoaded: true })
			},
			pin: { component: myPin },
			googleApiKey: process.env.REACT_APP_DEV_GOOGLE_MAPS_API

			// enableClusters: true,
			// cluster: {
			// 	component: clusterMarker,
			// 	radius: 100
			// }
		}

		return (
			<div className="App">

		<Navbar/>
      <div id="map">
				<Map {...mapProps}>
					{(location, closeLocation) => {
						return (
							<Info
								show={location.show}
								style={{

									height: '30px',
									backgroundColor: '#696969',
									width: '120px'
								}}
							>
								<div
									style={{
										textAlign: 'left',
										color: 'white',
										height: '22px', // Info height - padding - border to show border
										border: '1px solid white',
										padding: '3px',
										fontSize: '12px'
									}}
								>
									{location.name}
									<div
										style={{
											position: 'absolute',
											top: 3,
											right: 5,
											cursor: 'pointer',
											fontWeight: 800
										}}
										onClick={() => closeLocation(location.id)}
									>
										[x]
									</div>
								</div>
							</Info>
						)
					}}
				</Map>
</div>
				<h2>Locations In Window</h2>
				{this.state.locations.map(location => (
					<div
						key={location.id}
						style={{
							border: '1px solid #444',
							width: '25%',
							display: 'inline-block',
							marginTop: '5px',
							marginRight: '5px',
							padding: '10px',
							color: '#444',
							backgroundColor: "black"
						}}
					>
						<div>
							<h3
								style={{
									margin: '8px'
								}}
							>
								{location.name}
							</h3>
						</div>
						<div id ="distance">{location.distanceFromCenter} miles</div>
					</div>
				))}
			</div>
		)
	}
}

export default StoreLocator
