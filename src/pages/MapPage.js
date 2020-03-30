import  React from 'react';
import MapView, {Marker} from 'react-native-maps';

export default function MapPage() {
    const initialRegion = {
        latitude: 59.435870,
        longitude: 24.750804,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <MapView style={{flex:1}}
                 ref={map}
                 initialRegion={initialRegion}>
            <Marker identifier={`Mrk-0`} coordinate={{
                latitude: 59.435870,
                longitude: 24.750804
            }} />
        </MapView>
    );
}
