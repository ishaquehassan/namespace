import  React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MapView,{ Marker } from 'react-native-maps';
import {TASKS_FETCHED, TASKS_FETCHING_FAILED} from './../store/modules/Map/actions';
import Api from "../store/Api"
import Configs from '../core/Configs';


export default function MapPage() {
    const dispatch = useDispatch();
    const map = useRef(null);
    const mapState = useSelector(state => state.mapView);
    const [markers,setMarkers] = useState([]);
    const [requestCount,updateRequestCount] = useState(0);

    useEffect(() => {
        let temp = [];
        mapState.tasks.filter((t)=>t.address.location).map((task, i) =>
        {
            temp.push({
                latitude: task.address.location.coordinates[1],
                longitude: task.address.location.coordinates[0]
            })
        });

        setMarkers(temp);
        console.log(temp.length);
        if(temp.length > 0 && requestCount !== 0){
            map.current.fitToCoordinates(temp, {edgePadding: { top: 200, right: 200, bottom: 100, left: 200 },animated: true,});
        }
        updateRequestCount(requestCount+1);
    }, [mapState.tasks]);

    useEffect(() => {
        let myInterval = setInterval(()=>{
            (new Api()).getTasks()
                .then((res) => dispatch({ type: TASKS_FETCHED, payload: res.data }))
                .catch(error => dispatch({ type: TASKS_FETCHING_FAILED, payload: error }))
        }, Configs.POOL_INTERVAL);
        return () => clearInterval(myInterval);
    }, [requestCount]);

    return (
        <MapView style={{flex:1}}
                 ref={map}
                 initialRegion={{
                     latitude: 59.435870,
                     longitude: 24.750804,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                 }}>
            {markers.map((mark, idx) => <Marker key={`Key${idx}`} identifier={`Mrk${idx}`} coordinate={mark} />)}
        </MapView>
    );
}

