import { expect } from 'chai';
import {WeatherStationsReducer} from '../';
import {ActionTypes} from '../../actionTypes';
import { WeatherStationService } from '../../services/weatherStationService';
import * as helpers from '../../helpers';
import { WeatherStationsCollection, WeatherStationsCollectionModel, WeatherStationsModel } from '../../models';
import { generateMap } from 'base/shared/ModelHelper';

describe('Reducers', () => {
  describe('WeatherStations reducer', () => {
    
    beforeEach(() => {
        //service = new WeatherStationService();
    });
    
    it('Should return the initial state', () => {

      const action = {
        type: ActionTypes.WEATHERSTATIONS_REQUEST
      };

      expect(WeatherStationsReducer({}, action)).to.deep.equal({});
    });

    it('Should return the state WeatherStations updated request successfull', () => {

      //const data = [weatherStationsMock[0], weatherStationsMock[1]]
      const data = {id:1}; //weatherStationsMock;

      const action = {
        type: ActionTypes.WEATHERSTATIONS_SUCCESS,
        result: WeatherStationService
      };

      // const model = new WeatherStationsCollectionModel();

      // const returnedData = WeatherStationsReducer(model, action).data;
      // console.log('returnedData', returnedData);

      // let element = returnedData.keySeq().first();
      // console.log('element', element);
      // expect(returnedData.get(element).id).to.deep.equal(data.id );

      //expect(returnedData.get(element).id).to.deep.equal(data[0].id );
    });


    // it('should return the state of WeatherStations request fail', () => {

    //   const action = {
    //     type: ActionTypes.WEATHERSTATIONS_ERROR
    //   };

    //   expect(reducer([], action)).to.deep.equal([]);
    // });


    // it('Should return the initial state when request WeatherStation ', () => {

    //   const action = {
    //     type: ActionTypes.WEATHERSTATION_REQUEST
    //   };

    //   expect(reducer([], action)).to.deep.equal([]);
    // });

    // it('Should return the state WeatherStation updated request successfull', () => {


    //   const action = {
    //     type: ActionTypes.WEATHERSTATION_SUCCESS,
    //     result: helpers.getDataWeatherStation(weatherStationMock)
    //   };

    //   const model = new WeatherStationsCollection();

    //   const returnedData = reducer(model, action).get('weatherStationDetails');


    //   expect(returnedData[0].id).to.deep.equal(weatherStationMock.station.id );
    // });


    // it('should return the state of WeatherStation request fail', () => {

    //   const action = {
    //     type: ActionTypes.WEATHERSTATION_ERROR
    //   };

    //   expect(reducer([], action)).to.deep.equal([]);
    // });

    // it('Should return the initial state when request forecast ', () => {

    //   const action = {
    //     type: ActionTypes.FORECAST_REQUEST
    //   };

    //   expect(reducer([], action)).to.deep.equal([]);
    // });

    // it('Should return the state forecast updated request successfull', () => {

    //   const action = {
    //     type: ActionTypes.FORECAST_SUCCESS,
    //     result: generateMap(ForecastMock.list, ForecastModel)
    //   };
    //   const model = new WeatherStationsCollection();

    //   const returnedData = reducer(model, action).get('forecast');
    //   let element = returnedData.keySeq().first();
      
    //   expect(returnedData.get(element).dt).to.deep.equal(ForecastMock.list[0].dt);
    // });


    // it('should return the state of forecast request fail', () => {

    //   const action = {
    //     type: ActionTypes.FORECAST_ERROR
    //   };

    //   expect(reducer([], action)).to.deep.equal([]);
    // });

    // it('should return the state of station selected', () => {

    //   const action = {
    //     type: ActionTypes.WEATHERSTATION_SELECTED,
    //     id: 15
    //   };

    //   const model = new WeatherStationsCollection();

    //   const returnedData = reducer(model, action).get('stationSelected');

    //   expect(returnedData).to.deep.equal(15);
    // });



  });
});
