import React, { useEffect } from 'react';
import { useStationsData } from '../StationsContext';
import { Station } from '../../models/Station';

const StationsTestConsumer = () => {
  const { stationsCollection, getStations } = useStationsData();

  useEffect(() => {
    getStations();
  });

  return (
    <div>
      <div>count: {stationsCollection.count}</div>
      {stationsCollection.map((station: Station) => (
        <div key={station.name}>{station.name}</div>
      ))}
    </div>
  );
};

describe('Stations Context', () => {
  it('creates', () => {});
});
