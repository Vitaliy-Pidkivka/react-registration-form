import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
	width: '100%',
	height: '450px'

}

const center = {
	lat: 34.101585,
	lng: -118.333626
}

const Map = () => {
	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(map => {
		const bounds = new window.google.maps.LatLngBounds()
		map.fitBounds(bounds)

		setMap(map)
	}, [])

	const onUnmount = React.useCallback(map => {
		setMap(null)
	}, [])


	return (
		<>
			<LoadScript
				googleMapsApiKey="AIzaSyB3RIvpmO6drWbrblA8DViaAYzkuxZbS_o"
			>
				<GoogleMap
					className="mb-2"
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
				>
					<Marker position={center}/>

				</GoogleMap>
			</LoadScript>
			<h4 className="mt-2 text-center">To participate in the conference, please fill out the form </h4>
		</>
	)
}

export default Map
