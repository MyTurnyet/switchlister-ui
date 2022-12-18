import { PropsWithChildren } from 'react';
import { StationsContext, StationsDataContext } from '../data/StationsContext';
import { StationCollection } from '../models/collections/StationCollection';
import { Station } from '../models/Station';

export interface FakeStationsContextProps extends PropsWithChildren {
  stationsToReturn: Station[];
}

const defaultProps: FakeStationsContextProps = { stationsToReturn: [] };
export const FakeStationsContext = (props: FakeStationsContextProps) => {
  const stationContextValues: StationsDataContext = {
    refreshData: () => {
      return;
    },
    isLoading: false,
    stations: new StationCollection(props.stationsToReturn),
  };
  return (
    <StationsContext.Provider value={stationContextValues}>
      {props.children}
    </StationsContext.Provider>
  );
};

FakeStationsContext.defaultProps = defaultProps;
