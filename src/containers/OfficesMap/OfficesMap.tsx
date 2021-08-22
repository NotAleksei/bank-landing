import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './OfficesMap.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import location from '../../img/icon/location.svg';

const PIN_COORDINATES = [{
    coordinates: [55.75,37.61],
    key: uuidv4()
  }, {
    coordinates: [51.54,46.03],
    key: uuidv4()
  }, {
    coordinates: [55.80,49.1],
    key: uuidv4()
  }, {
    coordinates: [57.16,65.54],
    key: uuidv4()
  }, {
    coordinates: [55,73.36],
    key: uuidv4()
  }
]

const OfficesMap: React.FC = () => {

  function createPlacemarks(): JSX.Element[] {
    return PIN_COORDINATES.map(pin => {
      return <Placemark
        key={pin.key}
        geometry={pin.coordinates}
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
