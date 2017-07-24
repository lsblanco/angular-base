import { Component, EventEmitter, Input, Output, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, State } from 'base';
import { WeatherStationActions } from '../../actions';
import { WeatherStationsModel, WeatherStations } from '../../models/';
import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'base-map-box',
  templateUrl: './mapBox.component.html',
  styleUrls: ['./mapBox.component.css']
})

export class MapBoxComponent implements OnInit {
  @ViewChildren(AgmInfoWindow) queryList: QueryList<AgmInfoWindow>;
  infoWindow: AgmInfoWindow;
  data$: Observable<any>;
 
  lat: number = 39.938043;
  lng: number = -4.337157;
  zoom: number = 6;

  constructor(
    public store: Store<State>,
    public weatherStationActions: WeatherStationActions
  ) {}

  ngOnInit() {
    this.data$ = this.store.select(state => state.weatherStation.data);
  }

  mouseOverMarker(item) {
    this.select(item);
    this.store.dispatch(this.weatherStationActions.weatherStationSelected(item.stationId));
    this.store.dispatch(this.weatherStationActions.weatherStation(item.stationId)); 
    this.infoWindow.open();
  }

  mouseOutMarker(item) {
    this.store.dispatch(this.weatherStationActions.weatherStationSelected(-1));
    this.infoWindow.close();
  }

  private select(item) {
    this.infoWindow = this.queryList.find(res => res.latitude == item.coord.Lat && 
                                                 res.longitude == item.coord.Lon);
  }
}




// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';
// import GoogleMap from 'google-map-react';
// import * as Actions from '../../actions';

// import styles from './styles.css';

// import MapMarker from '../MapMarker';

// export  class MapBox extends Component {

//   static propTypes = {
//     key: PropTypes.string.isRequired,
//     center: PropTypes.object,
//     zoom: PropTypes.number,
//     dispatch: PropTypes.func.isRequired,
//     Stations: PropTypes.object.isRequired,
//     StationSelected: PropTypes.number.isRequired
//   };

//   static defaultProps = {
//     key: 'AIzaSyAUrK9ZaUL0Ga-RZYYFukBuTNm0qO3GbNI',
//     center: { lat: 39.938043, lng: -4.337157 },
//     zoom: 6
//   };

//   constructor (props) {
//     super(props);
//     this.actions = bindActionCreators(Actions, props.dispatch);
//   }

//   shouldComponentUpdate = shouldPureComponentUpdate;

//   onChildClick = (key, childProps) => {

//     this.actions.getWeather(childProps.lat, childProps.lng);
//     this.actions.weatherStationSelected(parseInt(key));
//     this.actions.getWeatherStation(parseInt(childProps.stationId));

//     return key;
//   }

//   render () {
//     let Stations = this.props.Stations;
//     let StationSelected = this.props.StationSelected;
//     const mapMarkerList = Stations.valueSeq().map( item => {
//       return (
//         <MapMarker
//           key={ item.get('id') }
//           lat={ item.station.coord.lat }
//           stationId={ item.stationId }
//           lng={ item.station.coord.lon }
//           selected={ StationSelected }
//           distance={ item.get('distance') }
//           main={ item.last.main }
//           station={ item.get('station') }
//         />
//       );

//     });


//     return (
//       <div className={ styles.mapBox }>
//         <GoogleMap
//           id="map"
//           bootstrapURLKeys={ { key:this.props.key } }
//           defaultCenter={ this.props.center }
//           onChildClick={ this.onChildClick }
//           defaultZoom={ this.props.zoom }
//         >
//           { mapMarkerList }
//         </GoogleMap>
//       </div>
//     );
//   }}

// export default connect(
//   (state) => ({
//     Stations: state.WeatherStations.data,
//     StationSelected: state.WeatherStations.stationSelected
//   })
// )(MapBox);
