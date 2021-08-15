import React from 'react';
import './OfficesMap.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import location from '../../img/icon/location.svg';

const PIN_COORDINATES = [
  [55.75,37.35],
  [51.55,45.74],
  [55.80,48.81],
  [57.17,65.24],
  [55,73.10]
]

const OfficesMap: React.FC = () => {

  function createPlacemarks(): JSX.Element[] {
    return PIN_COORDINATES.map(coordinates => {
      return <Placemark
                geometry={coordinates}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: location,
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
