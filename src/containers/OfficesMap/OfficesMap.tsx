import React from 'react';
import './OfficesMap.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import location from '../../img/icon/location.svg';

const PIN_COORDINATES = [
  [55.75,37.61],
  [51.54,46.03],
  [55.80,49.1],
  [57.16,65.54],
  [55,73.36]
]

const OfficesMap: React.FC = () => {

  function createPlacemarks(): JSX.Element[] {
    return PIN_COORDINATES.map(coordinates => {
      return <Placemark
        geometry={coordinates}
        options={{
          iconLayout: 'default#image',
          iconImageHref: location,
          iconImageOffset: [-17, -38],
          iconImageSize: [35, 40],
        }}
      />
    })
  }

  return (
    <div className="offices-map">
      <h1>Отделения Лига Банка</h1>
      <YMaps>
        <div>
          <Map defaultState={{ center: [56, 58], zoom: 5 }} width={1170} height={460}>
            {createPlacemarks()}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default OfficesMap;
